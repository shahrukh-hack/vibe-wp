import React, { useState } from 'react';
import { Layers, Search, Check, ExternalLink, ShieldCheck, Box, Sparkles, Filter } from 'lucide-react';
import { toast } from 'sonner';

export interface PluginSpec {
  id: string;
  name: string;
  category: 'builders' | 'themes' | 'blocks' | 'store' | 'forms' | 'fields' | 'addons' | 'dynamic' | 'code' | 'seo' | 'translation';
  version: string;
  type: string;
  description: string;
  codeSnippet: string;
}

export const SPECIALIZATIONS_DATA: PluginSpec[] = [
  // Builders (8)
  { id: 'elementor', name: 'Elementor', category: 'builders', version: '3.25+', type: 'Visual Builder', description: 'Deep access to Elementor widget registry, document models, and dynamic tags.', codeSnippet: `\\Elementor\\Plugin::$instance->documents->get($post_id)->get_elements_data();` },
  { id: 'bricks', name: 'Bricks Builder', category: 'builders', version: '1.11+', type: 'Visual Builder', description: 'Native structure inspection, nestable elements, and Bricks global color/typography tokens.', codeSnippet: `\\Bricks\\Database::get_data($post_id, 'bricks_data');` },
  { id: 'divi5', name: 'Divi 5', category: 'builders', version: '5.0 Beta+', type: 'Visual Builder', description: 'Next-gen Divi JSON module tree manipulation and layout generation.', codeSnippet: `\\ET_Builder_Element::get_modules();` },
  { id: 'beaver', name: 'Beaver Builder', category: 'builders', version: '2.8+', type: 'Visual Builder', description: 'Node layout parsing, module rendering, and custom field connections.', codeSnippet: `\\FLBuilderModel::get_layout_data('published', $post_id);` },
  { id: 'breakdance', name: 'Breakdance', category: 'builders', version: '2.1+', type: 'Visual Builder', description: 'Header/footer template rules, dynamic conditions, and global styling maps.', codeSnippet: `\\Breakdance\\Data\\get_tree($post_id);` },
  { id: 'wpbakery', name: 'WPBakery Page Builder', category: 'builders', version: '7.9+', type: 'Visual Builder', description: 'Shortcode syntax tree parsing, custom element injection, and grid mapping.', codeSnippet: `\\WPBMap::getShortCodes();` },
  { id: 'etch', name: 'Etch', category: 'builders', version: '1.0+', type: 'Visual Builder', description: 'Lightweight clean DOM tree generation and semantic CSS layout controls.', codeSnippet: `\\Etch\\Core\\get_schema($post_id);` },
  { id: 'mosaic', name: 'Mosaic', category: 'builders', version: '1.2+', type: 'Visual Builder', description: 'Modular grid scaffolding and CSS-grid container orchestration.', codeSnippet: `\\Mosaic\\Layout::resolve_grid($post_id);` },

  // Themes (6)
  { id: 'generatepress', name: 'GeneratePress', category: 'themes', version: '3.5+', type: 'Core Theme', description: 'GP Elements, dynamic layout hooks, and Customizer CSS token overrides.', codeSnippet: `add_action('generate_after_header', 'vibe_inject_hero_banner');` },
  { id: 'astra', name: 'Astra', category: 'themes', version: '4.8+', type: 'Core Theme', description: 'Astra Custom Layouts, hook locations, and global palette variables.', codeSnippet: `apply_filters('astra_header_layout', 'vibe_modern_header');` },
  { id: 'kadence-theme', name: 'Kadence Theme', category: 'themes', version: '1.2+', type: 'Core Theme', description: 'Kadence Hooked Elements, conditional display rules, and global typography tokens.', codeSnippet: `\\Kadence\\get_theme_option('palette');` },
  { id: 'avada', name: 'Avada', category: 'themes', version: '7.11+', type: 'Core Theme', description: 'Avada Studio container sync, Fusion Builder elements, and post cards.', codeSnippet: `\\Fusion_Template_Builder::get_instance();` },
  { id: 'oceanwp', name: 'OceanWP', category: 'themes', version: '3.6+', type: 'Core Theme', description: 'OceanWP custom templates, sidebar hooks, and micro-header rules.', codeSnippet: `add_action('ocean_before_content_inner', 'vibe_breadcrumbs');` },
  { id: 'spectra-one', name: 'Spectra One', category: 'themes', version: '1.1+', type: 'Full Site Editing (FSE)', description: 'Block theme templates, theme.json tokens, and fluid typography clamps.', codeSnippet: `wp_get_global_settings(['typography', 'fontSizes']);` },

  // Blocks (3)
  { id: 'generateblocks', name: 'GenerateBlocks', category: 'blocks', version: '2.0+', type: 'Block Suite', description: 'Grid, Container, and Query Loop block attribute composition.', codeSnippet: `\\GenerateBlocks\\get_block_styles($block_id);` },
  { id: 'kadence-blocks', name: 'Kadence Blocks', category: 'blocks', version: '3.3+', type: 'Block Suite', description: 'Row layout flexbox, Advanced Form blocks, and Lottie animations.', codeSnippet: `\\KadenceBlocks\\get_attributes($block_attributes);` },
  { id: 'spectra', name: 'Spectra', category: 'blocks', version: '2.14+', type: 'Block Suite', description: 'Info box, Modal, Countdown, and Popover block generators.', codeSnippet: `\\Spectra\\Blocks\\render_block_schema('spectra/info-box');` },

  // Store (1)
  { id: 'woocommerce', name: 'WooCommerce', category: 'store', version: '9.4+', type: 'E-Commerce', description: 'Product CRUD, stock synchronizer, cart calculate fees, and order checkout pipelines.', codeSnippet: `wc_get_products(['stock_status' => 'instock', 'limit' => 10]);` },

  // Forms (6)
  { id: 'wpforms', name: 'WPForms', category: 'forms', version: '1.9+', type: 'Form Engine', description: 'Form schema inspection, field validation hooks, and entry exports.', codeSnippet: `wpforms()->form->get($form_id);` },
  { id: 'cf7', name: 'Contact Form 7', category: 'forms', version: '6.0+', type: 'Form Engine', description: 'Shortcode tag parsing, mail tag replacements, and WPCF7 submission filters.', codeSnippet: `\\WPCF7_ContactForm::find(['post_status' => 'publish']);` },
  { id: 'gravityforms', name: 'Gravity Forms', category: 'forms', version: '2.8+', type: 'Form Engine', description: 'Multi-page conditional logic, GFAPI entry CRUD, and REST endpoints.', codeSnippet: `\\GFAPI::get_form($form_id);` },
  { id: 'fluentforms', name: 'Fluent Forms', category: 'forms', version: '5.2+', type: 'Form Engine', description: 'JSON form blueprints, webhook dispatches, and step form orchestrators.', codeSnippet: `\\FluentForm\\App\\Modules\\Form\\FormHandler::getForm($form_id);` },
  { id: 'ninjaforms', name: 'Ninja Forms', category: 'forms', version: '3.8+', type: 'Form Engine', description: 'NF field model tree, action triggers, and submission calculations.', codeSnippet: `Ninja_Forms()->form($form_id)->get_fields();` },
  { id: 'formidable', name: 'Formidable Forms', category: 'forms', version: '6.12+', type: 'Form Engine', description: 'Calculated fields, custom displays/views, and user registration flows.', codeSnippet: `\\FrmForm::getOne($form_id);` },

  // Field Plugins (6)
  { id: 'acf', name: 'Advanced Custom Fields (ACF PRO)', category: 'fields', version: '6.3+', type: 'Custom Fields', description: 'Field groups, Flexible Content, Repeaters, Options Pages, and ACF Blocks.', codeSnippet: `get_field_objects($post_id);` },
  { id: 'jetengine', name: 'JetEngine (Crocoblock)', category: 'fields', version: '3.5+', type: 'Custom Fields', description: 'Custom Post Types, Taxonomies, Relations, Query Builder, and Listing Grids.', codeSnippet: `jet_engine()->cpt->data->get_items();` },
  { id: 'metabox', name: 'Meta Box', category: 'fields', version: '5.9+', type: 'Custom Fields', description: 'MB Views, Custom Table storage, and Meta Box Builder registry.', codeSnippet: `rwmb_get_object_fields($post_id);` },
  { id: 'acpt', name: 'ACPT (Advanced Custom Post Types)', category: 'fields', version: '1.1+', type: 'Custom Fields', description: 'GraphQL support, Schema.org generators, and visual relationships.', codeSnippet: `\\ACPT\\Models\\PostTypeModel::get_all();` },
  { id: 'pods', name: 'Pods Framework', category: 'fields', version: '3.2+', type: 'Custom Fields', description: 'Pods CPT relationships, extendable tables, and field templates.', codeSnippet: `pods('project', $id)->field('budget');` },
  { id: 'ase', name: 'Admin and Site Enhancements (ASE)', category: 'fields', version: '7.4+', type: 'Site Utilities', description: 'Custom body/admin classes, post type orders, and clean login URLs.', codeSnippet: `\\ASE\\Options::get_enabled_modules();` },

  // Add-ons (1)
  { id: 'bricksforge', name: 'Bricksforge', category: 'addons', version: '2.2+', type: 'Builder Addon', description: 'GSAP animations, Pro Forms, Events trigger, and nestable builder extensions.', codeSnippet: `\\Bricksforge\\Animation::get_gsap_timeline($element_id);` },

  // Dynamic Data (1)
  { id: 'dynamic-shortcodes', name: 'Dynamic Shortcodes', category: 'dynamic', version: '2.0+', type: 'Dynamic Tags', description: 'Contextual token evaluation for user meta, post meta, and URL parameters.', codeSnippet: `do_shortcode('[vibe_meta key="client_name"]');` },

  // Code (1)
  { id: 'code-snippets', name: 'Code Snippets', category: 'code', version: '3.6+', type: 'Code Engine', description: 'Database-stored PHP/CSS/JS snippet management with error sandbox protection.', codeSnippet: `\\Code_Snippets\\get_snippets();` },

  // SEO (4)
  { id: 'yoast', name: 'Yoast SEO', category: 'seo', version: '23.8+', type: 'SEO Suite', description: 'Meta title/description schemas, OpenGraph tags, and XML sitemaps.', codeSnippet: `\\YoastSEO()->meta->for_post($post_id)->open_graph_title;` },
  { id: 'rankmath', name: 'Rank Math SEO', category: 'seo', version: '1.0.230+', type: 'SEO Suite', description: 'Schema Generator (JSON-LD), Content AI score, and redirection rules.', codeSnippet: `\\RankMath\\Helper::get_post_meta('title', $post_id);` },
  { id: 'aioseo', name: 'All in One SEO (AIOSEO)', category: 'seo', version: '4.7+', type: 'SEO Suite', description: 'Smart tags, TruSEO analysis, and local business rich snippets.', codeSnippet: `aioseo()->meta->title->getTitle($post);` },
  { id: 'seopress', name: 'SEOPress', category: 'seo', version: '8.2+', type: 'SEO Suite', description: 'White-label SEO metadata, Dublin Core, and breadcrumb trails.', codeSnippet: `\\seopress_get_service('Post')->getTitle($post_id);` },

  // Translation (1)
  { id: 'weglot', name: 'Weglot', category: 'translation', version: '4.3+', type: 'Localization', description: 'Multi-lingual DOM translation hooks and language switcher integration.', codeSnippet: `\\WeglotWP\\Services\\Language_Service::get_current_language();` },
];

export const SpecializationsMatrix: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [activePlugin, setActivePlugin] = useState<PluginSpec>(SPECIALIZATIONS_DATA[0]);

  const categories = [
    { id: 'all', label: 'All 38 Plugins', count: 38 },
    { id: 'builders', label: 'Builders (8)', count: 8 },
    { id: 'themes', label: 'Themes (6)', count: 6 },
    { id: 'blocks', label: 'Blocks (3)', count: 3 },
    { id: 'store', label: 'Store (1)', count: 1 },
    { id: 'forms', label: 'Forms (6)', count: 6 },
    { id: 'fields', label: 'Field Plugins (6)', count: 6 },
    { id: 'addons', label: 'Add-ons (1)', count: 1 },
    { id: 'dynamic', label: 'Dynamic Data (1)', count: 1 },
    { id: 'code', label: 'Code (1)', count: 1 },
    { id: 'seo', label: 'SEO (4)', count: 4 },
    { id: 'translation', label: 'Translation (1)', count: 1 },
  ];

  const filtered = SPECIALIZATIONS_DATA.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyCode = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    toast.success(`Copied PHP hook for ${activePlugin.name}!`);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white shadow-md">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">38 Builders, Plugins & Themes Covered End-to-End</h2>
              <p className="text-xs text-muted-foreground">
                Deep architectural integration: AI agents can parse page builders, query custom fields, manage WooCommerce, and generate form hooks.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 text-xs font-mono font-semibold">
            38 Specializations Active
          </div>
        </div>

        {/* Search & Category Pills */}
        <div className="space-y-3 pt-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by plugin name (e.g. Elementor, ACF, WooCommerce, Rank Math)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCat === c.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Plugins & Active Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Plugin Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[550px] overflow-y-auto pr-1">
          {filtered.map((plugin) => (
            <button
              key={plugin.id}
              onClick={() => setActivePlugin(plugin)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                activePlugin.id === plugin.id
                  ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
                  : 'border-border bg-card hover:bg-muted/30'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-primary px-2 py-0.5 rounded bg-primary/10">
                    {plugin.category}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">{plugin.version}</span>
                </div>
                <h4 className="text-sm font-bold text-foreground">{plugin.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{plugin.description}</p>
              </div>

              <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>{plugin.type}</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> MCP Ready
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Col: Active Specialization Detail */}
        <div className="rounded-2xl border border-border bg-card p-5 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono font-bold uppercase">
                {activePlugin.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground">Tested: {activePlugin.version}</span>
            </div>

            <h3 className="text-lg font-bold text-foreground">{activePlugin.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{activePlugin.description}</p>

            {/* PHP Execution Signature */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-mono font-semibold text-foreground">AI Agent PHP Hook Call:</span>
              <div className="p-3 rounded-xl bg-muted/60 border border-border font-mono text-xs text-foreground overflow-x-auto">
                <pre>{activePlugin.codeSnippet}</pre>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleCopyCode(activePlugin.codeSnippet)}
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Copy Agent PHP Hook</span>
          </button>
        </div>
      </div>
    </div>
  );
};
