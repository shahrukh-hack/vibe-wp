<div align="center">

# 🌐 Vibe WP
### The AI Power Tool for WordPress & WooCommerce — Made Simple

[![Author](https://img.shields.io/badge/Author-@shahrukh--hack-181717?style=flat-square&logo=github)](https://github.com/shahrukh-hack)
[![Version](https://img.shields.io/badge/Version-v1.7.0-2563EB?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0-green?style=flat-square)](https://modelcontextprotocol.io/)
[![Built For](https://img.shields.io/badge/AI%20Agents-Antigravity%20%7C%20Cursor%20%7C%20Claude-purple?style=flat-square)](https://github.com/shahrukh-hack/vibe-wp)

<br />

> **Turn your AI assistant into an expert WordPress & WooCommerce manager.**  
> Simply type in plain English what you want to do (dispatch orders, add shipping rules, fix missing images, create store banners, or protect your site from hackers), and **Vibe WP** handles the technical work automatically with zero plugin bloat.

</div>

---

## 📖 What is Vibe WP? (In Simple Terms)

Running a WordPress or WooCommerce website usually requires clicking through dozens of confusing settings menus or buying expensive, slow plugins.

**Vibe WP** connects your website directly to AI tools like **Google Antigravity**, **Cursor**, or **Claude Code**. Instead of coding or clicking around in `wp-admin`, you simply tell the AI what you want in plain English, and it gets done in seconds!

---

## 💬 Real-World Prompts: What You Type ➔ What You Achieve

Here are real examples of how anyone (even with zero technical knowledge) can run their store using simple chat prompts:

---

### 1. 📦 Daily Order Dispatch & Courier Tracking
> **What it does:** Updates WooCommerce orders, generates live clickable tracking links, and sends dispatch emails to customers.

* **💬 What you type in chat:**
  ```text
  "Update Order #4821: Add Australia Post tracking number AP982348123AU, mark as Completed, and notify the customer."
  ```
* **🎯 What you achieve instantly:**
  * Order `#4821` is changed from *Processing* to *Completed*.
  * A live clickable tracking link (`https://auspost.com.au/mypost/track/#/details/AP982348123AU`) is saved to the order.
  * The customer receives an automated email with tracking details.
  * Supported couriers: **Australia Post**, **StarTrack Express**, **TNT / FedEx**, **CouriersPlease**, **Aramex**.

---

### 2. 🖼️ Missing Product Image Resolver
> **What it does:** Finds high-resolution photos for products that imported from supplier feeds without images.

* **💬 What you type in chat:**
  ```text
  "Find a high-res photo for our Ubiquiti switch (MPN: USW-24-POE) and set it as the featured product image."
  ```
* **🎯 What you achieve instantly:**
  * Searches the global hardware catalog by Brand and Part Number.
  * Downloads the official high-resolution photo directly into your WordPress media library.
  * Sets the image as the main product thumbnail with Google SEO alt-tags.

---

### 3. 📢 Store Announcement Banners & Notices
> **What it does:** Puts a temporary announcement bar at the top of your website without installing slow banner plugins.

* **💬 What you type in chat:**
  ```text
  "Add a green top banner saying: 'Order before 2:00 PM for Same-Day Adelaide Courier Dispatch!' with a 2-hour countdown timer and a button to our shop."
  ```
* **🎯 What you achieve instantly:**
  * A sleek announcement bar appears across the top of your website.
  * Includes a live countdown timer and a dismiss button that remembers when a customer closes it.

---

### 4. 🚚 Regional Shipping & Freight Surcharges
> **What it does:** Sets up custom delivery pricing based on Australian postcodes and heavy item weights.

* **💬 What you type in chat:**
  ```text
  "Give free delivery for Adelaide Metro postcodes (5000-5199) on orders over $150 AUD. If the cart has heavy items like server racks over 20kg, add a $25 commercial freight fee."
  ```
* **🎯 What you achieve instantly:**
  * Calculates exact delivery fees at checkout automatically.
  * Displays a live progress goal on the cart: *"Add $35 more for FREE Adelaide Delivery!"*

---

### 5. 🛍️ AI Product Attribute Extractor (For Shop Filters & Amazon)
> **What it does:** Reads messy supplier feed titles and extracts clean filterable attributes (RAM, Screen Size, CPU, Resolution) and Amazon Seller Central compliance fields.

* **💬 What you type in chat:**
  ```text
  "Extract all technical specifications from our 5,000 imported products so customers can filter by RAM, Screen Size, and Processor on our shop sidebar."
  ```
* **🎯 What you achieve instantly:**
  * Customers see clean filters on your shop: `RAM (16GB, 32GB)`, `Screen Size (15.6")`, `Brand (Dell)`.
  * Prepares 100% compliant Amazon Seller Central metadata (Brand Registry, MPN, Hazmat UN3481 Li-Ion battery info, AU Type I plug).
  * Automatically handles 16 commercial categories (Laptops, Desktops, Monitors, TVs, Soundbars, Speakers, Alarms, Intercoms, Printers, Toners, Components, Networking, CCTV, Power/UPS, Cables, Peripherals).

---

### 6. 🛡️ 1-Click Security Shield (Anti-Hacker Hardening)
> **What it does:** Protects your WordPress site from common hacker attacks without heavy security plugins.

* **💬 What you type in chat:**
  ```text
  "Harden our WordPress site: block bots from probing admin usernames, disable XML-RPC attacks, and add security headers."
  ```
* **🎯 What you achieve instantly:**
  * Shuts down XML-RPC brute force attacks.
  * Blocks `/wp-json/wp/v2/users` so bots cannot harvest admin usernames.
  * Injects enterprise HTTP security headers (`X-Frame-Options`, `Content-Security-Policy`).

---

### 7. 🎨 Theme Design & Fluid Responsive Typography
> **What it does:** Automatically calculates smooth font sizes that scale perfectly from small mobile phones to giant desktop monitors.

* **💬 What you type in chat:**
  ```text
  "Generate smooth responsive font sizes for our GeneratePress theme so H1 headings look great on iPhone (32px) and scale smoothly to Desktop (56px)."
  ```
* **🎯 What you achieve instantly:**
  * Computes mathematical CSS `clamp()` formulas (`clamp(2.000rem, 2.22vw + 1.500rem, 3.500rem)`).
  * Exports 1-click design tokens for **GeneratePress, Kadence, Astra, Bricks Builder, and block themes (`theme.json` v3)**.

---

### 8. 📁 Custom Post Types & Sections (CPT)
> **What it does:** Creates new custom content sections (e.g. Case Studies, Team Members, Services) with categories and custom fields.

* **💬 What you type in chat:**
  ```text
  "Create a new 'Case Studies' section with an 'Industry' category, featured image support, and full Gutenberg editor support."
  ```
* **🎯 What you achieve instantly:**
  * Registers the complete custom post type and category taxonomy in WordPress with REST API support in 5 seconds.

---

## ⚡ 60-Second Quickstart (Command Line Shortcuts)

If you prefer using the terminal, you can trigger any feature with one simple command:

```bash
# Dispatch courier tracking (AusPost, StarTrack, TNT)
npx vibe-wp track

# Deploy store announcement notice
npx vibe-wp banner

# Look up missing product photos
npx vibe-wp image

# Scaffold regional postcode shipping rules
npx vibe-wp shipping

# Generate responsive fluid font scales
npx vibe-wp theme

# Run 1-click WordPress security hardening
npx vibe-wp security

# Scaffold Custom Post Types & Taxonomies
npx vibe-wp cpt

# View all 38 supported builders and plugins
npx vibe-wp specs

# Start native Model Context Protocol (MCP) server for AI
npx vibe-wp mcp
```

---

## 🔌 How to Connect to AI Assistants (Antigravity, Cursor, Claude Code)

Add this simple configuration to connect your AI assistant directly to your site:

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
