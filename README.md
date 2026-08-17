<div align="center">

# 🌐 Vibe WP (v1.0)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime for WordPress, WooCommerce & ACF

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.0.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![WordPress](https://img.shields.io/badge/WordPress-6.7%2B%20Ready-21759B?style=flat-square&logo=wordpress)](https://wordpress.org)
[![WooCommerce](https://img.shields.io/badge/WooCommerce-9.0%2B%20Ready-96588A?style=flat-square&logo=woocommerce)](https://woocommerce.com)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **Give your AI coding agents direct PHP runtime execution, WooCommerce product controls, and Gutenberg React block scaffolding inside WordPress.**

</div>

---

## 🌐 Live Interactive MCP Demo Sandbox

Test the visual PHP execution environment, WooCommerce inventory manager, and Gutenberg React generator:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## ⚡ The Problem: Why Traditional APIs Fail for AI Agents in WordPress

When using AI coding agents (**Antigravity**, **Cursor**, **Claude Code**, **Windsurf**) to build or maintain WordPress and WooCommerce websites, standard REST APIs fall short:

1. **🔒 Restricted API Endpoints:** Standard REST endpoints cannot run complex WP_Query filters, manipulate custom post meta directly, or execute arbitrary PHP logic.
2. **🧩 Plugin Black Boxes:** Agents cannot inspect active plugin filters, ACF field groups, or WooCommerce action hooks without writing custom throwaway plugins.
3. **🧱 Manual Gutenberg Block Authoring:** Generating modern React 19 / Tailwind Gutenberg blocks requires tedious boilerplate setup.

---

## 🚀 The Vibe WP Architecture

```
┌────────────────────────────────────────────────────────┐
│     AI AGENTS (Antigravity / Cursor / Claude Code)     │
└───────────────────────────┬────────────────────────────┘
                            │ Model Context Protocol (JSON-RPC 2.0 stdio)
                            ▼
┌────────────────────────────────────────────────────────┐
│             VIBE WP MCP SERVER (vibe-wp)               │
└───────────────────────────┬────────────────────────────┘
                            │ Direct PHP Lifecycle Execution & REST Auth
                            ▼
┌────────────────────────────────────────────────────────┐
│          WORDPRESS & WOOCOMMERCE ENVIRONMENT           │
│ • execute_php               • wc_manage_products       │
│ • scaffold_gutenberg_block  • inspect_wp_hooks         │
│ • ACF PRO Field Schemas     • Custom Post Types (CPT)  │
└────────────────────────────────────────────────────────┘
```

---

## ⚡ 60-Second Quickstart Guide

```bash
# 1. Initialize configuration in your local development workspace
npx vibe-wp init

# 2. Verify connection to your local WordPress site
npx vibe-wp check

# 3. Scaffold a custom Gutenberg block with React & Tailwind
npx vibe-wp scaffold-block pricing-matrix

# 4. Launch the Model Context Protocol (MCP) Server for AI IDEs
npx vibe-wp mcp
```

---

## 🔌 Model Context Protocol (MCP) Setup for AI Editors

Equip **Antigravity**, **Cursor**, and **Claude Code** with native WordPress and WooCommerce tools:

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
| **`execute_php`** | `{ code: string }` | Executes isolated PHP scripts directly inside the WordPress runtime with access to `$wpdb` and core APIs. |
| **`wc_manage_products`** | `{ action, productId?, value? }` | Queries inventory, updates bulk pricing, and manages stock levels in WooCommerce. |
| **`scaffold_gutenberg_block`** | `{ blockSlug: string }` | Generates modern React 19 & Tailwind Gutenberg blocks with `block.json` metadata. |
| **`inspect_wp_hooks`** | `{}` | Returns all active WordPress filters and actions with priority rankings. |

---

## 🔒 Security & Environment Recommendations

> [!IMPORTANT]
> **Development & Staging Only:** `vibe-wp` enables direct PHP execution and is designed strictly for **local development environments** (LocalWP, Docker, DDEV, staging servers). Do not expose direct PHP execution endpoints on unmonitored production servers without strict firewall and application password restrictions.

---

## 🙏 Credits & Ecosystem References

- **[Novamira](https://github.com/use-novamira/novamira):** Pioneered PHP runtime access via Model Context Protocol for WordPress AI agents.
- **[WordPress Core](https://wordpress.org):** The world's open-source publishing engine.
- **[WooCommerce](https://woocommerce.com):** Open-source e-commerce platform.

---

## 🤝 Part of The Vibe Coder's Power Suite

1. 🪄 **[`vibe-superkit`](https://github.com/shahrukh-hack/vibe-superkit):** Anti-AI Slop & Stripe/Tailwind UI Design Engine ([Live Demo](https://shahrukh-hack.github.io/vibe-superkit/))
2. 🧠 **[`vibe-memory`](https://github.com/shahrukh-hack/vibe-memory):** Universal Long-Term Memory & Codebase AST Intelligence ([Live Demo](https://shahrukh-hack.github.io/vibe-memory/))
3. ⚡ **[`vibe-skills`](https://github.com/shahrukh-hack/vibe-skills):** Mega-Library of 50 Standard Agent Skills with 1-Command CLI (`npx vibe-skills add <skill>`)
4. 🤖 **[`vibe-agency`](https://github.com/shahrukh-hack/vibe-agency):** Autonomous Multi-Agent Team Orchestrator ([Live Demo](https://shahrukh-hack.github.io/vibe-agency/))
5. 🌐 **[`vibe-wp`](https://github.com/shahrukh-hack/vibe-wp):** Model Context Protocol Server for WordPress & WooCommerce ([Live Demo](https://shahrukh-hack.github.io/vibe-wp/))

---

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
