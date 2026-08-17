<div align="center">

# 🌐 Vibe WP (v1.1)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime with 38 Ecosystem Specializations & Persistent Project Memory

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.1.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Plugins%20Covered-indigo?style=flat-square)](#-38-builders-plugins--themes-covered-end-to-end)
[![Persistent Memory](https://img.shields.io/badge/Memory-Persistent%20Project%20Memory-purple?style=flat-square)](#-persistent-project-memory)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **The ultimate WordPress & WooCommerce intelligence layer for AI coding agents.**  
> Equips **Antigravity**, **Cursor**, and **Claude Code** with direct PHP runtime execution, **38 page builders & plugins covered end-to-end**, and persistent project memory across resets.

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the visual PHP execution environment, 38-specialization inspector, and persistent memory ledger:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## 📦 38 Builders, Plugins & Themes Covered End-to-End

`vibe-wp` provides deep runtime integration, metadata parsing, and hook awareness across 38 core WordPress technologies:

| Category | Count | Supported Technologies Covered End-to-End |
| :--- | :---: | :--- |
| **🏗️ Builders** | **8** | **Elementor**, **Bricks Builder**, **Divi 5**, **Beaver Builder**, **Breakdance**, **WPBakery Page Builder**, **Etch**, **Mosaic** |
| **🎨 Themes** | **6** | **GeneratePress**, **Astra**, **Kadence Theme**, **Avada**, **OceanWP**, **Spectra One** |
| **🧱 Blocks** | **3** | **GenerateBlocks**, **Kadence Blocks**, **Spectra** |
| **🛍️ Store** | **1** | **WooCommerce** (Product CRUD, Inventory, Checkout, Cart Fees) |
| **📝 Forms** | **6** | **WPForms**, **Contact Form 7 (CF7)**, **Gravity Forms**, **Fluent Forms**, **Ninja Forms**, **Formidable Forms** |
| **🏷️ Fields & CPT** | **6** | **Advanced Custom Fields (ACF PRO)**, **JetEngine (Crocoblock)**, **Meta Box**, **ACPT**, **Pods Framework**, **Admin & Site Enhancements (ASE)** |
| **⚡ Add-ons** | **1** | **Bricksforge** (GSAP timelines, Pro Forms, nestable elements) |
| **🔄 Dynamic Data** | **1** | **Dynamic Shortcodes** (user/post context evaluation) |
| **💻 Code Management** | **1** | **Code Snippets** (database-stored PHP/CSS/JS execution) |
| **🚀 SEO** | **4** | **Yoast SEO**, **Rank Math SEO**, **All in One SEO (AIOSEO)**, **SEOPress** |
| **🌐 Translation** | **1** | **Weglot** (DOM multilingual translation hooks) |

---

## 🧠 Persistent Project Memory

`vibe-wp` integrates directly with `AGENT_MEMORY.md` to ensure your AI agents never forget:
* **Active Builder Preferences:** Global palette IDs, spatial grids, and typography tokens (e.g., Bricks Global Colors).
* **Custom Post Types & Taxonomies:** ACF Repeater definitions, JetEngine relations, and CPT REST slugs.
* **Theme Hook Overrides:** Specific filter priorities (e.g., `generate_after_header` priority 15).
* **Security & Nonce Rules:** Custom WooCommerce checkout verification constraints.

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
| **`execute_php`** | `{ code: string }` | Executes isolated PHP scripts directly inside the active WordPress lifecycle with `$wpdb` access. |
| **`inspect_specialization`** | `{ pluginSlug: string }` | Queries schema, models, and hooks across **38 supported builders and plugins**. |
| **`wc_manage_products`** | `{ action, productId?, value? }` | Queries inventory, updates bulk pricing, and manages stock levels in WooCommerce. |
| **`get_persistent_memory`** | `{}` | Retrieves persistent site architectural decisions, theme hook overrides, and CPT definitions. |

---

## 🔒 Security & Environment Recommendations

> [!IMPORTANT]
> **Development & Staging Only:** `vibe-wp` enables direct PHP execution and is designed strictly for **local development environments** (LocalWP, Docker, DDEV, staging servers). Do not expose direct PHP execution endpoints on unmonitored production servers without strict firewall and application password restrictions.

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
