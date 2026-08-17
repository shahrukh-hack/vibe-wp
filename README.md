<div align="center">

# 🌐 Vibe WP (v1.3.0 Master Edition)
### Universal Model Context Protocol (MCP) Server & Headless AI Agent Runtime for WordPress, WooCommerce & 38 Ecosystem Specializations

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.3.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20Ready-green?style=flat-square)](https://modelcontextprotocol.io/)
[![WooCommerce AI Extractor](https://img.shields.io/badge/Plugin-WooCommerce%20AI%20Extractor-FF0055?style=flat-square&logo=woocommerce)](#-1-woocommerce-ai-attribute-extractor--amazon-sp-api-plugin)
[![Specializations](https://img.shields.io/badge/Specializations-38%20Covered%20End--to--End-indigo?style=flat-square)](#-4-specializations-38-builders-and-plugins-covered-end-to-end)
[![Live Visualizer](https://img.shields.io/badge/Live-Demo%20Sandbox-FF0055?style=flat-square&logo=framer)](https://shahrukh-hack.github.io/vibe-wp/)

<br />

> **The ultimate WordPress & WooCommerce intelligence layer for AI coding agents.**  
> Equips **Antigravity**, **Cursor**, and **Claude Code** with direct PHP execution, **WooCommerce AI Attribute Extractor** (16 categories + Amazon Seller Central SP-API compliance), **38 page builders & plugins covered end-to-end**, **WSOD Safe PHP Sandbox**, **Headless TypeScript Generator**, **SQL Optimizer**, and **Persistent Project Memory across sessions**.

</div>

---

## 🌐 Live Interactive Demo Sandbox

Test the visual PHP execution environment, 16-category AI attribute extractor, WSOD guard, TypeScript generator, and 38-specialization inspector:  
👉 **[https://shahrukh-hack.github.io/vibe-wp/](https://shahrukh-hack.github.io/vibe-wp/)**

---

## ⚡ System Requirements

```
REQUIRES: Novamira Free or Direct MCP · WordPress 6.9+ · PHP 8.0+
On top of Novamira Free & Native Model Context Protocol (JSON-RPC 2.0 stdio)
```

---

## 🛍️ 1. WooCommerce AI Attribute Extractor & Amazon SP-API Plugin

Located in [`plugin/vibe-ai-attribute-extractor/`](plugin/vibe-ai-attribute-extractor/), this installable WordPress plugin solves the two biggest challenges in enterprise e-commerce:

```
                                  ┌────────────────────────────────────────────────────────┐
                                  │             MASTER DUAL-PURPOSE EXTRACTION             │
                                  └───────────────────────────┬────────────────────────────┘
                                                              │
         ┌────────────────────────────────────────────────────┴────────────────────────────────────────────────────┐
         ▼                                                                                                         ▼
┌────────────────────────────────────────────────────────┐                               ┌────────────────────────────────────────────────────────┐
│ 🎯 1. WOOCOMMERCE FACETED STORE FILTERS                │                               │ 🛒 2. AMAZON SELLER CENTRAL SP-API COMPLIANCE          │
├────────────────────────────────────────────────────────┤                               ├────────────────────────────────────────────────────────┤
│ • Customers see clean names: RAM, Screen Size, Brand   │                               │ • brand: Matches Amazon Brand Registry exact case      │
│ • Database stores: pa_ram, pa_screen_size, pa_brand    │                               │ • manufacturer_part_number (MPN): DELL-LAT-5540        │
│ • Instant sidebar swatches, checkboxes & dropdowns     │                               │ • dangerous_goods_regulations: UN3481 (Lithium Ion)    │
│ • 100% FacetWP, Kadence, & Astra Shop compatible       │                               │ • power_plug_type: Type I (AU/NZ Standard 3-Pin)       │
└────────────────────────────────────────────────────────┘                               └────────────────────────────────────────────────────────┘
```

### ⚡ The 3 Real-World Enterprise Solutions:
1. **🔄 Nightly CSV/XML Feed Automation:** Hooks into `pmxi_saved_post` (WP All Import) and `woocommerce_product_import_inserted_product_object` automatically on nightly feed crons.
2. **🚀 7,000+ Scale with Zero Timeouts:** Uses WooCommerce `ActionScheduler` (`as_enqueue_async_action`) to process catalogs in background chunks of 50 with a live progress bar.
3. **⚡ 0.001s Deterministic Hash Cache:** Unmodified products on nightly re-runs skip processing in `0.001s` via content hashing `md5(title + desc + sku)`.

---

## 📦 2. All 16 Commercial Product Categories Covered:

| Category | Products Covered | Key Extracted Attributes |
| :--- | :--- | :--- |
| **1. 💻 Laptops & Notebooks** | Ultrabooks, Business Laptops (ThinkPad, Latitude), Gaming (Legion, ROG), 2-in-1s | `Form Factor`, `Screen Size`, `Resolution`, `CPU`, `RAM`, `SSD`, `GPU`, `OS`, `Battery Wh (UN3481)` |
| **2. 🖥️ Desktops & SFF PCs** | Small Form Factor (SFF - OptiPlex), Full Towers, Mini PCs / NUCs, All-in-Ones | `Form Factor`, `CPU (i7/Ryzen/Xeon)`, `Socket`, `RAM (DDR5)`, `SSD`, `Workstation GPU`, `OS` |
| **3. 🎯 Monitors & Displays** | 24"-49" Office Displays, UltraSharp Creator Screens, 240/420Hz Gaming, Curved | `Screen Size`, `Resolution (4K/QHD)`, `Panel (Fast IPS/OLED)`, `Refresh Rate`, `VESA Mount` |
| **4. 📺 Commercial TVs** | 55"-98" Commercial TVs, Hospitality TVs, QLED / OLED Digital Signage | `TV Screen Size`, `Panel Tech`, `Usage Rating (16/7 vs 24/7)`, `Smart Platform`, `HDMI Ports` |
| **5. 🔊 Soundbars & Audio** | Active Soundbars, Wireless Subwoofers, Dolby Atmos Systems | `Audio Channels (2.1/5.1/Atmos)`, `Power Output (Watts RMS)`, `Inputs (HDMI eARC/Optical)` |
| **6. 📢 Commercial Speakers** | 100V Ceiling Mount Speakers, PA Horns, Active Studio Monitors | `Speaker Type (100V Line/Ceiling)`, `Power (Watts)`, `Weatherproof (IP66)` |
| **7. 🚨 Security Alarm Systems** | Bosch, Paradox, Hikvision AX PRO Wireless Kits, PIR Sensors, Sirens | `Alarm Device Type`, `PIR Detection Range (12m 85°)`, `Frequency (868MHz AU)`, `Battery` |
| **8. 🚪 Video Intercoms** | IP Video Door Stations, Touchscreen Indoor Room Monitors, RFID Keypads | `Intercom Type`, `Access Methods (RFID/PIN/Face)`, `Camera FOV (180° Fisheye)`, `PoE` |
| **9. 🖨️ Commercial Printers** | HP LaserJet, Brother, Epson EcoTank, Zebra Thermal Label / Barcode | `Print Tech (Laser/Thermal)`, `Speed (PPM)`, `Functions (MFP 3-in-1)`, `Paper Size (A4/A3/4x6")` |
| **10. 🖨️ Printer Consumables** | High-Yield Toner Cartridges, Imaging Drums, Ink Bottles, Label Rolls | `Consumable Type`, `Page Yield (Pages)`, `Cartridge Color (Mono/Cyan/Magenta/Yellow)`, `Brand` |
| **11. 🧠 RAM & Storage** | DDR4/DDR5 Desktop & SODIMM Laptop RAM, M.2 NVMe PCIe 4.0/5.0, Enterprise HDD | `RAM Capacity (8GB-128GB)`, `Speed (5600MHz)`, `Storage (500GB-20TB)`, `Interface (NVMe/SAS)` |
| **12. ⚡ CPU, GPU & Cards** | Intel Core Ultra, AMD Ryzen 9, NVIDIA RTX 4090, RTX A4000, Sound Cards | `Socket (LGA1700/AM5)`, `GPU Chipset`, `VRAM (8GB-24GB GDDR6X)`, `Audio Interface` |
| **13. 🌐 Switches & Telecom** | Ubiquiti UniFi, Cisco, MikroTik 8-48 Port PoE+ Switches, Wi-Fi 6/7 APs | `Port Count`, `Speed (10GbE SFP+)`, `PoE Budget (65W-740W)`, `Management Level (L2/L3)` |
| **14. 📹 CCTV & Surveillance** | Hikvision, Dahua 4K IP Turret & Bullet Cameras, 32-Channel NVRs | `Resolution (2MP-8MP 4K)`, `Housing (Turret/Bullet/PTZ)`, `Lens (2.8mm/Varifocal)`, `ColorVu 24/7` |
| **15. 🔋 PSU & UPS Power** | Modular Desktop PSUs 80+ Gold, APC / CyberPower Online Double-Conversion UPS | `Wattage (650W-1600W)`, `Efficiency (80+ Gold/Plat)`, `UPS Capacity (1kVA-5kVA)`, `Topology` |
| **16. 🔌 Cables & Peripherals** | Cat6a RJ45, Fiber OM4, HDMI 2.1 8K, Keyboards, Optical Mice, ANC Headsets | `Cable Length (0.5m-305m)`, `Connectors (HDMI/USB-C)`, `Switch Type`, `Headset Form` |

---

## 🛒 3. Amazon Seller Central SP-API Mandatory Mapping:

| Frontend Label (Customer Sees) | Database Slug (WooCommerce) | Amazon SP-API Field | Amazon Requirement |
| :--- | :--- | :--- | :---: |
| **`Brand`** | `pa_brand` | `brand` | **MANDATORY** |
| **`MPN`** | `pa_mpn` | `manufacturer_part_number` | **MANDATORY** |
| **`Model Number`** | `pa_model_number` | `model_name` | **MANDATORY** |
| **`Item Dimensions`** | `pa_item_dimensions` | `item_dimensions` | **MANDATORY** |
| **`Package Weight`** | `pa_package_weight` | `package_weight` | **MANDATORY** |
| **`Hazmat / Battery`** | `pa_dangerous_goods` | `dangerous_goods_regulations` | **MANDATORY (UN3481)** |
| **`Power Plug Type`** | `pa_plug_type` | `power_plug_type` | **MANDATORY (AU Type I)** |
| **`Operating Voltage`** | `pa_voltage` | `voltage` | **MANDATORY (240V AC)** |
| **`Country of Origin`** | `pa_country_of_origin` | `country_of_origin` | **MANDATORY (AU)** |
| **`5 Feature Bullets`** | `pa_bullet_point_1..5` | `bullet_point` | **RECOMMENDED (Buy Box)** |

---

## 📦 4. Specializations: 38 Builders and Plugins Covered End-to-End (and growing)

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

## ⚡ 5. The 5 Developer Superpowers Included

| Superpower | MCP Tool Name | Problem Solved |
| :--- | :--- | :--- |
| **1. 🛡️ WSOD Safe Guard** | `safe_execute_php` | Lints PHP syntax and wraps execution in sandbox rollback transactions to prevent fatal White Screens of Death. |
| **2. 🧬 Headless TypeScript Generator** | `generate_wp_types` | Auto-generates type-safe TypeScript interfaces and Zod runtime schemas from ACF PRO, JetEngine, and WooCommerce for Next.js / React. |
| **3. ⚡ SQL & Query Optimizer** | `analyze_slow_queries` | Detects unindexed `wp_postmeta` queries and N+1 loops, generating 1-click B-Tree indexing and cache priming fixes. |
| **4. 🏎️ Asset & CWV Auditor** | `audit_enqueued_assets` | Scans enqueued CSS/JS per page and writes surgical `wp_dequeue_script()` directives to fix Google Core Web Vitals. |
| **5. 📬 Form Webhook Simulator** | `simulate_form_webhook` | Tests Gravity Forms, WPForms, and Fluent Forms CRM payloads (HubSpot, Zapier, Make) without submitting dirty leads. |

---

## 🧠 6. Intelligence & Persistent Project Memory

`vibe-wp` preserves site-specific architectural choices in `AGENT_MEMORY.md` so AI agents never lose context when switching tools or starting fresh conversations across sessions:
* **Active Builder Tokens:** Bricks palette variables and Elementor container schemas.
* **Custom Post Types & Taxonomies:** ACF Repeater definitions, JetEngine relations, and CPT REST slugs.
* **Theme Hook Overrides:** Specific filter priorities (e.g. `generate_after_header` priority 15).
* **Security & Nonce Rules:** WooCommerce checkout verification constraints and custom sanitizers.

---

## ⚡ 60-Second Quickstart Guide

```bash
# 1. Initialize configuration and persistent memory
npx vibe-wp init

# 2. Run the AI Attribute Extractor directly via CLI
npx vibe-wp extract-attributes

# 3. View all 38 supported ecosystem plugins and builders
npx vibe-wp specs

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

## 👤 Author

Created with intention by **[Yogeshkumar Patel](https://github.com/shahrukh-hack)** • Adelaide, Australia 🇦🇺  
* **LinkedIn:** [https://www.linkedin.com/in/yogeshkumar-ai/](https://www.linkedin.com/in/yogeshkumar-ai/)  
* **GitHub:** [@shahrukh-hack](https://github.com/shahrukh-hack)

---

## 📄 License

MIT License © 2026 Yogeshkumar Patel
