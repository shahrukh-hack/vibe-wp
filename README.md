<div align="center">

# 🌐 Vibe WP (v1.1)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime with 38 Ecosystem Specializations & Persistent Project Memory

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.1.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Requirements](https://img.shields.io/badge/Requires-WP%206.9%2B%20%7C%20PHP%208.0%2B-blueviolet?style=flat-square)](#-system-requirements)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Covered%20End--to--End-indigo?style=flat-square)](#-specializations-38-builders-and-plugins-covered-end-to-end)
[![Persistent Memory](https://img.shields.io/badge/Memory-Across%20Sessions-purple?style=flat-square)](#-intelligence--persistent-project-memory)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **Adds deep WordPress specializations to your AI.**  
> Built on top of Novamira Free & direct MCP stdio runtime. Equips **Antigravity**, **Cursor**, and **Claude Code** with direct PHP execution, **38 page builders & plugins covered end-to-end**, and persistent project memory across sessions.

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the visual PHP execution environment, 38-specialization inspector, and persistent memory ledger:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## ⚡ System Requirements

```
REQUIRES: Novamira Free · WordPress 6.9+ · PHP 8.0+
On top of Novamira Free & Native Model Context Protocol (JSON-RPC 2.0 stdio)
```

---

## 📦 Specializations: 38 Builders and Plugins Covered End-to-End (and growing)

`vibe-wp` provides deep architectural integration, schema parsing, and hook awareness across 38 core WordPress technologies:

### 🏗️ **Builders**
> **Elementor** · **Bricks** · **Divi 5** · **Beaver Builder** · **Breakdance** · **WPBakery Page Builder** · **Etch** · **Mosaic** · *and growing*

### 🎨 **Themes**
> **GeneratePress** · **Astra** · **Kadence** · **Avada** · **OceanWP** · **Spectra One** · *and growing*

### 🧱 **Blocks**
> **GenerateBlocks** · **Kadence Blocks** · **Spectra** · *and growing*

### 🛍️ **Store**
> **WooCommerce** · *and growing*

### 📝 **Forms**
> **WPForms** · **Contact Form 7** · **Gravity Forms** · **Fluent Forms** · **Ninja Forms** · **Formidable Forms** · *and growing*

### 🏷️ **Field Plugins**
> **ACF** · **JetEngine** · **Meta Box** · **ACPT** · **Pods** · **ASE (Admin and Site Enhancements)** · *and growing*

### ⚡ **Add-ons**
> **Bricksforge** · *and growing*

### 🔄 **Dynamic Data**
> **Dynamic Shortcodes** · *and growing*

### 💻 **Code**
> **Code Snippets** · *and growing*

### 🚀 **SEO**
> **Yoast SEO** · **Rank Math** · **All in One SEO** · **SeoPress** · *and growing*

### 🌐 **Translation**
> **Weglot** · *and growing*

---

## 🧠 Intelligence & Persistent Project Memory

### **Memory Across Sessions**
`vibe-wp` preserves site-specific architectural decisions in `AGENT_MEMORY.md` so AI agents never lose context when switching tools or starting fresh conversations:
* **Active Builder Preferences:** Global palette tokens, layout grid spacing, and typography classes (e.g. Bricks & Elementor tokens).
* **Custom Post Types & Taxonomies:** ACF Repeater definitions, JetEngine relations, and CPT REST slugs.
* **Theme Hook Overrides:** Specific filter priorities (e.g. `generate_after_header` priority 15).
* **Security & Nonce Rules:** WooCommerce checkout verification constraints and custom sanitizers.

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
