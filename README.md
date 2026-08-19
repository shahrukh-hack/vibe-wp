<div align="center">

# 🌐 Vibe WP (v1.4)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime for WordPress & WooCommerce

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.4.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Covered%20End--to--End-indigo?style=flat-square)](#-1-specializations-38-builders-themes--plugins-covered-end-to-end)
[![Persistent Memory](https://img.shields.io/badge/Memory-Across%20Sessions-purple?style=flat-square)](#-2-intelligence--persistent-project-memory)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **The ultimate WordPress & WooCommerce intelligence layer for AI coding agents.**  
> Built on top of native Model Context Protocol (JSON-RPC 2.0 stdio). Equips **Antigravity**, **Cursor**, and **Claude Code** with **Regional Shipping Logic**, **Theme Design Studio & Fluid Typography**, safe PHP execution, **38 page builders & plugins covered end-to-end**, and persistent project memory.

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the visual PHP execution environment, regional shipping engine, theme design studio, and 38-specialization inspector:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## ⚡ System Requirements

```
REQUIRES: WordPress 6.9+ · PHP 8.0+ · Node.js 18+
Protocol: Native Model Context Protocol (JSON-RPC 2.0 stdio)
Supported IDEs: Google Antigravity, Cursor, Claude Code, Windsurf, Roo Code
```

---

## 🚚 1. WooCommerce Dynamic Shipping & Freight Rules Engine (`scaffold_shipping_rules`)

Generates lightweight, native WooCommerce PHP shipping logic without expensive or bloated plugins:

* **Regional Australian Postcode Matrix:** Fast local delivery logic for Greater Adelaide (`5000–5199`, `5950`), Interstate Metro (`2000–2249`, `3000–3207`, `4000–4179`), and Regional/Remote areas.
* **Bulky & Heavy Freight Surcharge:** Automatically detects heavy hardware or server racks (>20kg) and applies commercial tailgate delivery surcharges.
* **Live Free Shipping Cart Goal:** Injects dynamic *"Add $35 more for FREE Adelaide Delivery!"* progress banner onto cart and checkout pages.

```bash
# Scaffold shipping rules via CLI:
npx vibe-wp shipping
```

---

## 🎨 2. Theme Design Studio & Fluid Typography Engine (`generate_theme_tokens`)

Mathematically computes smooth CSS `clamp()` formulas and design tokens across all major theme ecosystems:

* **Mathematical Fluid Typography:** Calculates exact viewport scales (`clamp(min, preferred, max)`) from 360px mobile to 1440px desktop for `H1`–`H6` and Body text.
* **Multi-Theme Token Export:** Generates ready-to-use tokens for:
  * **GeneratePress:** Customizer CSS overrides & font filters.
  * **Kadence Theme:** Global palette variables (`--global-palette1`, `--global-h1-font-size`).
  * **Astra Theme:** Global color palette & typography tokens (`--ast-global-color-0`).
  * **Bricks Builder:** Global color variables & container width clamps.
  * **FSE Block Themes:** Official `theme.json` (v3) schemas.

```bash
# Generate theme tokens via CLI:
npx vibe-wp theme
```

---

## 🏗️ 3. Specializations: 38 Builders, Themes & Plugins Covered End-to-End

* 🏗️ **Builders (8):** **Elementor** · **Bricks** · **Divi 5** · **Beaver Builder** · **Breakdance** · **WPBakery Page Builder** · **Etch** · **Mosaic** · *and growing*
* 🎨 **Themes (6):** **GeneratePress** · **Astra** · **Kadence** · **Avada** · **OceanWP** · **Spectra One** · *and growing*
* 🧱 **Blocks (3):** **GenerateBlocks** · **Kadence Blocks** · **Spectra** · *and growing*
* 🛍️ **Store (1):** **WooCommerce** · *and growing*
* 📝 **Forms (6):** **WPForms** · **Contact Form 7** · **Gravity Forms** · **Fluent Forms** · **Ninja Forms** · **Formidable Forms** · *and growing*
* 🏷️ **Field Plugins & CPT (6):** **ACF PRO** · **JetEngine** · **Meta Box** · **ACPT** · **Pods** · **ASE (Admin & Site Enhancements)** · *and growing*
* ⚡ **Add-ons (1):** **Bricksforge** · *and growing*
* 🔄 **Dynamic Data (1):** **Dynamic Shortcodes** · *and growing*
* 💻 **Code Execution (1):** **Code Snippets** · *and growing*
* 🚀 **SEO (4):** **Yoast SEO** · **Rank Math** · **All in One SEO** · **SeoPress** · *and growing*
* 🌐 **Translation (1):** **Weglot** · *and growing*

---

## ⚡ 4. Developer Superpowers Included

| Superpower | MCP Tool Name | Problem Solved |
| :--- | :--- | :--- |
| **🚚 Shipping Engine** | `scaffold_shipping_rules` | Scaffolds native WooCommerce regional postcode shipping, bulky freight, and free delivery thresholds. |
| **🎨 Theme Studio** | `generate_theme_tokens` | Generates mathematical fluid typography `clamp()` and tokens for GeneratePress, Kadence, Astra, and `theme.json` v3. |
| **🛡️ WSOD Safe Guard** | `safe_execute_php` | Lints PHP syntax and wraps execution in isolated sandbox rollback transactions to prevent fatal White Screens of Death. |
| **🧬 Headless TS Types** | `generate_wp_types` | Auto-generates 100% type-safe TypeScript interfaces and Zod runtime schemas from ACF PRO and WooCommerce. |
| **⚡ SQL Optimizer** | `analyze_slow_queries` | Detects unindexed `wp_postmeta` table scans and N+1 query loops, generating 1-click B-Tree indexing and cache priming fixes. |
| **🏎️ Asset Auditor** | `audit_enqueued_assets` | Scans enqueued CSS/JS per page and writes surgical `wp_dequeue_script()` directives to eliminate render-blocking bloat. |
| **📬 Webhook Simulator** | `simulate_form_webhook` | Tests Gravity Forms, WPForms, and Fluent Forms CRM payloads (HubSpot, Zapier, Make) without submitting dirty leads. |

---

## 🧠 5. Intelligence & Persistent Project Memory

`vibe-wp` preserves site-specific architectural choices in `AGENT_MEMORY.md` so AI agents never suffer from context amnesia when switching tools or starting fresh conversations across sessions.

---

## 🎁 6. Bonus Add-on: WooCommerce AI Attribute Extractor Plugin

Included in [`plugin/vibe-ai-attribute-extractor/`](plugin/vibe-ai-attribute-extractor/) as a companion add-on for e-commerce stores:

* **Dual-Purpose Engine:** Extracts unstructured product specs (e.g. *RAM, Screen Size, Resolution, CPU, PoE Budget, Wattage*) into clean frontend WooCommerce filter labels (`pa_*`) and generates 100% compliant **Amazon Seller Central SP-API** metadata (`_amazon_*` including Brand Registry, MPN, Hazmat UN3481 Li-Ion, and AU Type I Plug).
* **Nightly Feed Automation:** Hooks into `pmxi_saved_post` (WP All Import) and WooCommerce CSV imports with `0.001s` content hash caching.
* **7,000+ Scale:** ActionScheduler async background queue in chunks of 50 with live progress tracking across 16 commercial categories.

---

## 🔌 7. Model Context Protocol (MCP) Setup

Equip **Antigravity**, **Cursor**, and **Claude Code** with direct WordPress runtime tools:

### 🔹 Google Antigravity (`~/.gemini/antigravity/mcp-config.json`):
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
