import React, { useState } from 'react';
import { Terminal, Play, CheckCircle, Code2, Copy, Sparkles, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const SAMPLE_SCRIPTS = [
  {
    name: 'Get Recent Posts & ACF Fields',
    code: `<?php\n$posts = get_posts([\n  'post_type' => 'post',\n  'posts_per_page' => 5,\n  'post_status' => 'publish'\n]);\n\n$data = array_map(function($p) {\n  return [\n    'id' => $p->ID,\n    'title' => $p->post_title,\n    'author' => get_the_author_meta('display_name', $p->post_author),\n    'hero_image' => get_field('hero_image', $p->ID),\n  ];\n}, $posts);\n\nwp_send_json_success($data);`,
    output: `{\n  "success": true,\n  "data": [\n    {\n      "id": 142,\n      "title": "Scaling WooCommerce with Headless Architecture",\n      "author": "Yogeshkumar Patel",\n      "hero_image": "https://example.com/uploads/2026/08/hero.webp"\n    },\n    {\n      "id": 139,\n      "title": "Migrating ACF Blocks to React 19",\n      "author": "Yogeshkumar Patel",\n      "hero_image": "https://example.com/uploads/2026/08/acf.webp"\n    }\n  ]\n}`,
  },
  {
    name: 'Create Custom Post Type (CPT)',
    code: `<?php\nregister_post_type('portfolio_case', [\n  'labels' => ['name' => 'Portfolio Cases', 'singular_name' => 'Case Study'],\n  'public' => true,\n  'show_in_rest' => true,\n  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],\n  'menu_icon' => 'dashicons-art',\n]);`,
    output: `{\n  "success": true,\n  "message": "Custom Post Type 'portfolio_case' successfully registered with REST API support."\n}`,
  },
  {
    name: 'Query Low Stock WooCommerce Products',
    code: `<?php\n$products = wc_get_products([\n  'status' => 'publish',\n  'limit' => 3,\n  'stock_status' => 'instock'\n]);\n\n$res = array_map(function($p) {\n  return [\n    'sku' => $p->get_sku(),\n    'name' => $p->get_name(),\n    'price' => $p->get_price(),\n    'stock' => $p->get_stock_quantity(),\n  ];\n}, $products);\n\nwp_send_json_success($res);`,
    output: `{\n  "success": true,\n  "data": [\n    { "sku": "WP-VIBE-01", "name": "Vibe Superkit Pro License", "price": "149.00", "stock": 42 },\n    { "sku": "WP-MEM-02", "name": "Vibe Memory Enterprise Seat", "price": "299.00", "stock": 18 }\n  ]\n}`,
  },
];

export const PhpRunnerSandbox: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState(0);
  const [code, setCode] = useState(SAMPLE_SCRIPTS[0].code);
  const [output, setOutput] = useState(SAMPLE_SCRIPTS[0].output);
  const [isRunning, setIsRunning] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedScript(idx);
    setCode(SAMPLE_SCRIPTS[idx].code);
    setOutput(SAMPLE_SCRIPTS[idx].output);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setOutput(SAMPLE_SCRIPTS[selectedScript].output);
      toast.success('PHP executed within WordPress lifecycle!');
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success('PHP script copied!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Direct WordPress PHP Runtime Sandbox</h2>
              <p className="text-xs text-muted-foreground">
                Run isolated PHP scripts directly inside the WordPress environment with full access to `wpdb`, ACF, and WooCommerce APIs.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 text-xs font-mono font-semibold">
            MCP Tool: execute_php
          </div>
        </div>

        {/* Script Selection Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2">
          {SAMPLE_SCRIPTS.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => handleSelect(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedScript === idx
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Output Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* PHP Editor */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-blue-500" />
              <span>WordPress PHP Script</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Copy script"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
              >
                {isRunning ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
                <span>Execute Script</span>
              </button>
            </div>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed">{code}</pre>
          </div>
        </div>

        {/* JSON-RPC Output */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WordPress Response (JSON-RPC)</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[10px] font-mono font-semibold">
              Status: 200 OK
            </span>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed text-emerald-600 dark:text-emerald-400">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
