<div align="center">

# 🌐 Vibe WP
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime for WordPress & WooCommerce

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.3.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Covered%20End--to--End-indigo?style=flat-square)](#-1-specializations-38-builders-themes--plugins-covered-end-to-end)
[![Persistent Memory](https://img.shields.io/badge/Memory-Across%20Sessions-purple?style=flat-square)](#-2-intelligence--persistent-project-memory)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **The ultimate WordPress intelligence layer for AI coding agents.**  
> Built on top of native Model Context Protocol (JSON-RPC 2.0 stdio). Equips **Antigravity**, **Cursor**, and **Claude Code** with direct safe PHP execution, **38 page builders & plugins covered end-to-end**, persistent project memory across sessions, headless TypeScript generation, and database SQL optimization.

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the visual PHP execution environment, 38-specialization inspector, headless TypeScript generator, and developer tools:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## ⚡ System Requirements

```
REQUIRES: WordPress 6.9+ · PHP 8.0+ · Node.js 18+
Protocol: Native Model Context Protocol (JSON-RPC 2.0 stdio)
Supported IDEs: Google Antigravity, Cursor, Claude Code, Windsurf, Roo Code
```

---

## 🏗️ 1. Specializations: 38 Builders, Themes & Plugins Covered End-to-End (and growing)

`vibe-wp` injects deep architectural schema models, hook awareness, and syntax rules into your AI coding assistant across 38 core WordPress technologies:

### 🏗️ **Builders (8)**
> **Elementor** · **Bricks** · **Divi 5** · **Beaver Builder** · **Breakdance** · **WPBakery Page Builder** · **Etch** · **Mosaic** · *and growing*

### 🎨 **Themes (6)**
> **GeneratePress** · **Astra** · **Kadence** · **Avada** · **OceanWP** · **Spectra One** · *and growing*

### 🧱 **Blocks (3)**
> **GenerateBlocks** · **Kadence Blocks** · **Spectra** · *and growing*

### 🛍️ **Store (1)**
> **WooCommerce** · *and growing*

### 📝 **Forms (6)**
> **WPForms** · **Contact Form 7** · **Gravity Forms** · **Fluent Forms** · **Ninja Forms** · **Formidable Forms** · *and growing*

### 🏷️ **Field Plugins & CPT (6)**
> **ACF PRO** · **JetEngine** · **Meta Box** · **ACPT** · **Pods** · **ASE (Admin & Site Enhancements)** · *and growing*

### ⚡ **Add-ons (1)**
> **Bricksforge** · *and growing*

### 🔄 **Dynamic Data (1)**
> **Dynamic Shortcodes** · *and growing*

### 💻 **Code Execution (1)**
> **Code Snippets** · *and growing*

### 🚀 **SEO (4)**
> **Yoast SEO** · **Rank Math** · **All in One SEO** · **SeoPress** · *and growing*

### 🌐 **Translation (1)**
> **Weglot** · *and growing*

---

## 🧠 2. Intelligence & Persistent Project Memory

`vibe-wp` preserves site-specific architectural choices in `AGENT_MEMORY.md` so AI agents never suffer from context amnesia when switching tools or starting fresh conversations across sessions:

* **Active Builder Tokens:** Preserves global palette tokens, layout grid spacing, and typography classes (e.g. Bricks & Elementor tokens).
* **Custom Post Types & Taxonomies:** ACF Repeater definitions, JetEngine relations, and CPT REST slugs.
* **Theme Hook Overrides:** Remembers specific filter priorities (e.g. `generate_after_header` priority 15).
* **Security & Nonce Rules:** WooCommerce checkout verification constraints and custom sanitizers.

---

## ⚡ 3. The 5 Developer Superpowers Included

| Superpower | MCP Tool Name | Problem Solved |
| :--- | :--- | :--- |
| **1. 🛡️ WSOD Safe PHP Sandbox** | `safe_execute_php` | Lints PHP syntax and wraps execution in isolated sandbox rollback transactions to prevent fatal White Screens of Death on live/staging sites. |
| **2. 🧬 Headless TypeScript Generator** | `generate_wp_types` | Auto-generates 100% type-safe TypeScript interfaces and Zod runtime schemas from ACF PRO, JetEngine, and WooCommerce for Next.js / React frontends. |
| **3. ⚡ SQL & Query Optimizer** | `analyze_slow_queries` | Detects unindexed `wp_postmeta` table scans and N+1 query loops, generating 1-click B-Tree indexing and cache priming fixes. |
| **4. 🏎️ Asset & CWV Auditor** | `audit_enqueued_assets` | Scans enqueued CSS/JS per page and writes surgical `wp_dequeue_script()` directives to eliminate render-blocking bloat. |
| **5. 📬 Form Webhook Simulator** | `simulate_form_webhook` | Tests Gravity Forms, WPForms, and Fluent Forms CRM payloads (HubSpot, Zapier, Make) without submitting dirty leads. |

---

## 🔌 4. Model Context Protocol (MCP) Setup

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

### 🔹 Claude Code (`~/.claude.json`):
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

## 🛠️ Native MCP Tools Included:

| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| **`safe_execute_php`** | `{ code: string }` | Executes PHP scripts with AST syntax linting and transaction rollback protection. |
| **`inspect_specialization`** | `{ pluginSlug: string }` | Queries schema, models, and hooks across **38 supported builders and plugins**. |
| **`generate_wp_types`** | `{ schemaType: string }` | Generates TypeScript interfaces & Zod schemas from ACF, JetEngine, or WooCommerce. |
| **`analyze_slow_queries`** | `{}` | Scans active database queries for unindexed `postmeta` bottlenecks and N+1 loops. |
| **`audit_enqueued_assets`** | `{ pageSlug?: string }` | Lists enqueued CSS/JS per page and outputs `wp_dequeue_script()` optimization directives. |
| **`get_persistent_memory`** | `{}` | Retrieves persistent site architectural decisions, theme hook overrides, and CPT definitions. |
| **`extract_product_attributes`**| `{ productId: number }` | Analyzes product text and maps structured taxonomy attributes (`pa_*`) to WooCommerce. |

---

## ⚡ 60-Second Quickstart Guide

```bash
# 1. Initialize configuration and persistent memory
npx vibe-wp init

# 2. View all 38 supported ecosystem plugins and builders
npx vibe-wp specs

# 3. Inspect active project memory
npx vibe-wp memory

# 4. Start the native Model Context Protocol (MCP) stdio server
npx vibe-wp mcp
```

---

## 🎁 5. Bonus Add-on: WooCommerce AI Attribute Extractor Plugin

Included in [`plugin/vibe-ai-attribute-extractor/`](plugin/vibe-ai-attribute-extractor/) as a companion add-on for e-commerce stores:

* **Dual-Purpose Engine:** Extracts unstructured product specs (e.g. *RAM, Screen Size, Resolution, CPU, PoE Budget, Wattage*) into clean frontend WooCommerce filter labels (`pa_*`) and generates 100% compliant **Amazon Seller Central SP-API** metadata (`_amazon_*` including Brand Registry, MPN, Hazmat UN3481 Li-Ion, and AU Type I Plug).
* **Nightly Feed Automation:** Hooks into `pmxi_saved_post` (WP All Import) and WooCommerce CSV imports with `0.001s` content hash caching.
* **7,000+ Scale:** ActionScheduler async background queue in chunks of 50 with live progress tracking.
* **16 Commercial Categories Covered:** Laptops, Desktops, Monitors, TVs, Soundbars, Commercial Speakers, Alarms, Intercoms, Printers, Toners, Components, Networking, CCTV, Power/UPS, Cables, Peripherals.

---

## 🔒 Security & Environment Recommendations

> [!IMPORTANT]
> **Development & Staging Recommended:** `vibe-wp` enables direct PHP execution and is designed primarily for **local development environments** (LocalWP, Docker, DDEV, staging servers). Do not expose direct PHP execution endpoints on unmonitored production servers without strict firewall and application password restrictions.

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
