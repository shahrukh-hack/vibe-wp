<div align="center">

# 🌐 Vibe WP (v1.2)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime for WordPress, WooCommerce & 38 Ecosystem Specializations

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.2.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![WooCommerce AI Extractor](https://img.shields.io/badge/Plugin-WooCommerce%20AI%20Extractor-FF0055?style=flat-square&logo=woocommerce)](#-woocommerce-ai-attribute-extractor-wordpress-plugin)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Covered%20End--to--End-indigo?style=flat-square)](#-specializations-38-builders-and-plugins-covered-end-to-end)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **The ultimate WordPress & WooCommerce intelligence layer for AI coding agents.**  
> Includes the **WooCommerce AI Attribute Extractor Plugin**, **WSOD Safe Guard**, **Headless TypeScript Generator**, **Slow SQL Query Optimizer**, and **38 ecosystem specializations**.

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the live attribute extractor, WSOD guard, TypeScript generator, and 38-specialization inspector:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## 🛍️ WooCommerce AI Attribute Extractor (WordPress Plugin Included)

Located in [`plugin/vibe-ai-attribute-extractor/`](plugin/vibe-ai-attribute-extractor/), this installable WordPress plugin solves one of the biggest headaches in e-commerce:

### 🔴 The E-Commerce Problem:
Store owners have thousands of products where attributes (*Color, Material, Size, Brand, Refresh Rate, Capacity*) are buried in raw unstructured text inside product titles or HTML descriptions. Because they aren't structured WooCommerce taxonomy attributes (`pa_*`), **customers cannot filter products using layered navigation or faceted search widgets**.

### 🟢 How the Plugin Solves It:
1. **Scans Titles & Descriptions:** AI extracts structured key-value attributes (e.g. `Color: Navy Blue`, `Material: 100% Cotton`, `Size: XL`).
2. **Registers Global Taxonomies:** Automatically creates `pa_color`, `pa_material`, `pa_size` if they do not exist (`wc_create_attribute()`).
3. **Assigns Product Terms:** Binds terms directly to products (`wp_set_object_terms()`) and saves them as filterable attributes.
4. **Faceted Filtering Works Instantly:** Layered navigation widgets, sidebar checkboxes, and search filters now function out of the box!

```bash
# Extract attributes directly via CLI / MCP:
npx vibe-wp extract-attributes
```

---

## ⚡ The 5 Developer Superpowers Included

| Superpower | MCP Tool Name | Problem Solved |
| :--- | :--- | :--- |
| **1. 🛡️ WSOD Safe Guard** | `safe_execute_php` | Lints PHP syntax and wraps execution in sandbox rollback transactions to prevent fatal White Screens of Death. |
| **2. 🧬 Headless TypeScript Generator** | `generate_wp_types` | Auto-generates type-safe TypeScript interfaces and Zod runtime schemas from ACF PRO, JetEngine, and WooCommerce for Next.js / React. |
| **3. ⚡ SQL & Query Optimizer** | `analyze_slow_queries` | Detects unindexed `wp_postmeta` queries and N+1 loops, generating 1-click B-Tree indexing and cache priming fixes. |
| **4. 🏎️ Asset & CWV Auditor** | `audit_enqueued_assets` | Scans enqueued CSS/JS per page and writes surgical `wp_dequeue_script()` directives to fix Google Core Web Vitals. |
| **5. 📬 Form Webhook Simulator** | `simulate_form_webhook` | Tests Gravity Forms, WPForms, and Fluent Forms CRM payloads (HubSpot, Zapier, Make) without submitting dirty leads. |

---

## 📦 Specializations: 38 Builders and Plugins Covered End-to-End (and growing)

* 🏗️ **Builders (8):** **Elementor** · **Bricks** · **Divi 5** · **Beaver Builder** · **Breakdance** · **WPBakery Page Builder** · **Etch** · **Mosaic** · *and growing*
* 🎨 **Themes (6):** **GeneratePress** · **Astra** · **Kadence** · **Avada** · **OceanWP** · **Spectra One** · *and growing*
* 🧱 **Blocks (3):** **GenerateBlocks** · **Kadence Blocks** · **Spectra** · *and growing*
* 🛍️ **Store (1):** **WooCommerce** · *and growing*
* 📝 **Forms (6):** **WPForms** · **Contact Form 7** · **Gravity Forms** · **Fluent Forms** · **Ninja Forms** · **Formidable Forms** · *and growing*
* 🏷️ **Field Plugins (6):** **ACF** · **JetEngine** · **Meta Box** · **ACPT** · **Pods** · **ASE (Admin and Site Enhancements)** · *and growing*
* ⚡ **Add-ons (1):** **Bricksforge** · *and growing*
* 🔄 **Dynamic Data (1):** **Dynamic Shortcodes** · *and growing*
* 💻 **Code (1):** **Code Snippets** · *and growing*
* 🚀 **SEO (4):** **Yoast SEO** · **Rank Math** · **All in One SEO** · **SeoPress** · *and growing*
* 🌐 **Translation (1):** **Weglot** · *and growing*

---

## 🧠 Intelligence & Persistent Project Memory

`vibe-wp` saves site-specific architectural choices in `AGENT_MEMORY.md` so AI agents never lose context when switching tools or starting fresh conversations across sessions.

---

## 🔌 Model Context Protocol (MCP) Setup

Equip **Antigravity**, **Cursor**, and **Claude Code** with direct WordPress runtime tools:

### 🔹 Antigravity (`~/.gemini/antigravity/mcp-config.json`):
```json
{
  "mcpServers": {
    "vibe-wp": {
      "command": "npx",
      "args": ["-y", "vibe-wp", "mcp"],
      "env": {
        "WP_SITE_URL": "https://mysite.local",
        "WP_APP_USER": "admin",
        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx"
      }
    }
  }
}
```

### 🔹 Cursor (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "vibe-wp": {
      "command": "npx",
      "args": ["-y", "vibe-wp", "mcp"],
      "env": {
        "WP_SITE_URL": "https://mysite.local",
        "WP_APP_USER": "admin",
        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx"
      }
    }
  }
}
```

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
