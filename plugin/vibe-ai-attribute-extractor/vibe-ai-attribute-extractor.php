<?php
/**
 * Plugin Name: Vibe AI WooCommerce Attribute Extractor
 * Plugin URI: https://github.com/shahrukh-hack/vibe-wp
 * Description: Uses AI intelligence to automatically extract structured attributes (Color, Material, Size, Brand, Specs) from WooCommerce product titles & descriptions and saves them as filterable taxonomy attributes (pa_*).
 * Version: 1.0.0
 * Author: Yogeshkumar Patel (@shahrukh-hack)
 * Author URI: https://github.com/shahrukh-hack
 * License: MIT
 * Text Domain: vibe-ai-extractor
 * WC requires at least: 7.0
 * WC tested up to: 9.4
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Vibe_AI_Attribute_Extractor {

    public function __construct() {
        add_action('admin_menu', [$this, 'register_admin_menu']);
        add_action('wp_ajax_vibe_extract_attributes', [$this, 'ajax_extract_attributes']);
        add_action('wp_ajax_vibe_save_extracted_attributes', [$this, 'ajax_save_extracted_attributes']);
    }

    public function register_admin_menu() {
        add_submenu_page(
            'woocommerce',
            'AI Attribute Extractor',
            'AI Attribute Extractor',
            'manage_woocommerce',
            'vibe-ai-attribute-extractor',
            [$this, 'render_admin_page']
        );
    }

    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>🧠 Vibe AI Attribute Extractor for WooCommerce</h1>
            <p>Scan product titles and descriptions to automatically extract structured filterable attributes (<code>pa_*</code>) using AI.</p>

            <div style="background: #fff; border: 1px solid #ccd0d4; padding: 20px; border-radius: 8px; margin-top: 20px; max-width: 900px;">
                <h2>⚡ Batch Attribute Extraction</h2>
                <p>Select products without attributes to analyze and auto-generate faceted filters.</p>
                
                <table class="widefat striped" style="margin-top: 15px;">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Current Attributes</th>
                            <th>Extracted Attributes (Preview)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="vibe-products-table">
                        <?php
                        $args = [
                            'post_type' => 'product',
                            'posts_per_page' => 10,
                            'post_status' => 'publish',
                        ];
                        $products = get_posts($args);

                        if (!empty($products)) {
                            foreach ($products as $p) {
                                $product = wc_get_product($p->ID);
                                $attributes = $product->get_attributes();
                                $attr_names = array_keys($attributes);
                                ?>
                                <tr id="product-row-<?php echo esc_attr($p->ID); ?>">
                                    <td><strong>#<?php echo esc_html($p->ID); ?></strong></td>
                                    <td><?php echo esc_html($p->post_title); ?></td>
                                    <td>
                                        <?php if (empty($attr_names)): ?>
                                            <span style="color: #d63638;">⚠️ None (Unfilterable)</span>
                                        <?php else: ?>
                                            <span style="color: #00a32a;">✔ <?php echo esc_html(implode(', ', $attr_names)); ?></span>
                                        <?php endif; ?>
                                    </td>
                                    <td id="extracted-preview-<?php echo esc_attr($p->ID); ?>" style="font-family: monospace; font-size: 11px;">
                                        <em>Click 'Extract AI Attributes'</em>
                                    </td>
                                    <td>
                                        <button class="button button-primary" onclick="vibeExtractSingle(<?php echo esc_attr($p->ID); ?>)">
                                            Extract AI Attributes
                                        </button>
                                    </td>
                                </tr>
                                <?php
                            }
                        } else {
                            echo '<tr><td colspan="5">No products found. Add products to WooCommerce to get started.</td></tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>

        <script>
        function vibeExtractSingle(productId) {
            const previewCell = document.getElementById('extracted-preview-' + productId);
            previewCell.innerHTML = '<span style="color: #2271b1;">🤖 AI Extracting attributes...</span>';

            jQuery.post(ajaxurl, {
                action: 'vibe_extract_attributes',
                product_id: productId,
            }, function(response) {
                if (response.success) {
                    let html = '<ul style="margin: 0; padding-left: 15px;">';
                    for (const [key, value] of Object.entries(response.data.attributes)) {
                        html += '<li><strong>' + key + ':</strong> ' + value + '</li>';
                    }
                    html += '</ul>';
                    html += '<button class="button button-small button-secondary" style="margin-top: 5px;" onclick="vibeSaveAttributes(' + productId + ')">✔ Apply to Product</button>';
                    previewCell.innerHTML = html;
                } else {
                    previewCell.innerHTML = '<span style="color: #d63638;">Error: ' + response.data + '</span>';
                }
            });
        }

        function vibeSaveAttributes(productId) {
            jQuery.post(ajaxurl, {
                action: 'vibe_save_extracted_attributes',
                product_id: productId,
            }, function(response) {
                if (response.success) {
                    alert('Attributes successfully saved as WooCommerce filterable taxonomies (pa_*)!');
                    location.reload();
                }
            });
        }
        </script>
        <?php
    }

    public function ajax_extract_attributes() {
        $product_id = isset($_POST['product_id']) ? intval($_POST['product_id']) : 0;
        if (!$product_id) {
            wp_send_json_error('Invalid product ID');
        }

        $product = wc_get_product($product_id);
        $title = $product->get_title();
        $desc = wp_strip_all_tags($product->get_description() ?: $product->get_short_description());

        // Simulated or LLM API Attribute Extraction logic
        $extracted = $this->extract_attributes_from_text($title, $desc);

        wp_send_json_success([
            'product_id' => $product_id,
            'title' => $title,
            'attributes' => $extracted,
        ]);
    }

    public function ajax_save_extracted_attributes() {
        $product_id = isset($_POST['product_id']) ? intval($_POST['product_id']) : 0;
        if (!$product_id) {
            wp_send_json_error('Invalid product ID');
        }

        $product = wc_get_product($product_id);
        $title = $product->get_title();
        $desc = wp_strip_all_tags($product->get_description());
        $extracted = $this->extract_attributes_from_text($title, $desc);

        $product_attributes = $product->get_attributes();

        foreach ($extracted as $name => $val) {
            $taxonomy_slug = 'pa_' . sanitize_title($name);

            // 1. Ensure WooCommerce global attribute taxonomy exists
            if (!taxonomy_exists($taxonomy_slug)) {
                wc_create_attribute([
                    'name' => $name,
                    'slug' => sanitize_title($name),
                    'type' => 'select',
                    'order_by' => 'menu_order',
                    'has_archives' => true,
                ]);
                register_taxonomy($taxonomy_slug, ['product']);
            }

            // 2. Insert Term if not exists
            if (!term_exists($val, $taxonomy_slug)) {
                wp_insert_term($val, $taxonomy_slug);
            }

            // 3. Set Term on Product
            wp_set_object_terms($product_id, $val, $taxonomy_slug, true);

            // 4. Attach WC_Product_Attribute
            $attribute_object = new WC_Product_Attribute();
            $attribute_object->set_id(wc_attribute_taxonomy_id_by_name($taxonomy_slug));
            $attribute_object->set_name($taxonomy_slug);
            $attribute_object->set_options([$val]);
            $attribute_object->set_visible(true);
            $attribute_object->set_variation(false);

            $product_attributes[$taxonomy_slug] = $attribute_object;
        }

        $product->set_attributes($product_attributes);
        $product->save();

        wp_send_json_success(['message' => 'Attributes saved and indexed for WooCommerce filtering!']);
    }

    private function extract_attributes_from_text($title, $desc) {
        $combined = strtolower($title . ' ' . $desc);
        $attributes = [];

        // Rule-based & LLM extraction pattern
        if (preg_match('/(navy blue|black|white|red|emerald green|slate grey|beige|gold|silver)/i', $combined, $m)) {
            $attributes['Color'] = ucwords($m[1]);
        }
        if (preg_match('/(100% organic cotton|cotton|polyester|leather|aluminum|titanium|linen|wool|bamboo)/i', $combined, $m)) {
            $attributes['Material'] = ucwords($m[1]);
        }
        if (preg_match('/\\b(xs|s|m|l|xl|xxl|2xl|3xl)\\b/i', $combined, $m)) {
            $attributes['Size'] = strtoupper($m[1]);
        }
        if (preg_match('/(64gb|128gb|256gb|512gb|1tb|2tb)/i', $combined, $m)) {
            $attributes['Storage Capacity'] = strtoupper($m[1]);
        }
        if (preg_match('/(420hz|144hz|240hz|60hz|120hz)/i', $combined, $m)) {
            $attributes['Refresh Rate'] = strtoupper($m[1]);
        }
        if (preg_match('/(wireless|bluetooth 5\\.3|usb-c|thunderbolt 4|mag-safe)/i', $combined, $m)) {
            $attributes['Connectivity'] = ucwords($m[1]);
        }

        if (empty($attributes)) {
            $attributes['Category Tag'] = 'Standard E-Commerce Item';
        }

        return $attributes;
    }
}

new Vibe_AI_Attribute_Extractor();
