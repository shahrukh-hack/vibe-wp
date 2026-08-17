import React, { useState } from 'react';
import { Layers, Copy, Check, Sparkles, Code2, Download } from 'lucide-react';
import { toast } from 'sonner';

const SAMPLE_BLOCKS = [
  {
    title: 'Stripe Pricing Matrix Block',
    slug: 'vibe/pricing-matrix',
    category: 'layout',
    blockJson: `{\n  "$schema": "https://schemas.wp.org/trunk/block.json",\n  "apiVersion": 3,\n  "name": "vibe/pricing-matrix",\n  "version": "1.0.0",\n  "title": "Stripe Pricing Matrix",\n  "category": "widgets",\n  "icon": "money-alt",\n  "description": "High-converting pricing table with annual discount toggle",\n  "attributes": {\n    "monthlyPrice": { "type": "string", "default": "$49" },\n    "annualPrice": { "type": "string", "default": "$39" },\n    "features": { "type": "array", "default": ["Unlimited AI Queries", "26 UI Components"] }\n  },\n  "editorScript": "file:./index.js",\n  "editorStyle": "file:./index.css",\n  "style": "file:./style-index.css"\n}`,
    reactComponent: `import { registerBlockType } from '@wordpress/blocks';\nimport { useBlockProps, RichText } from '@wordpress/block-editor';\n\nregisterBlockType('vibe/pricing-matrix', {\n  edit: ({ attributes, setAttributes }) => {\n    const blockProps = useBlockProps({ className: 'p-6 rounded-2xl border border-slate-200 bg-white shadow-sm' });\n    return (\n      <div {...blockProps}>\n        <h3 className="text-xl font-bold text-slate-900">Pro Plan</h3>\n        <div className="text-3xl font-extrabold text-indigo-600 mt-2">{attributes.monthlyPrice}<span className="text-sm font-normal text-slate-500">/mo</span></div>\n      </div>\n    );\n  },\n  save: () => null // Server-side rendered\n});`,
  },
  {
    title: 'Hero CTA with Spring Button',
    slug: 'vibe/hero-cta',
    category: 'theme',
    blockJson: `{\n  "$schema": "https://schemas.wp.org/trunk/block.json",\n  "apiVersion": 3,\n  "name": "vibe/hero-cta",\n  "title": "Hero CTA with Spring Button",\n  "category": "design",\n  "icon": "button",\n  "attributes": {\n    "headline": { "type": "string", "default": "Build Faster with AI" },\n    "ctaText": { "type": "string", "default": "Get Started Free" }\n  }\n}`,
    reactComponent: `import { registerBlockType } from '@wordpress/blocks';\nimport { useBlockProps } from '@wordpress/block-editor';\n\nregisterBlockType('vibe/hero-cta', {\n  edit: ({ attributes }) => (\n    <div {...useBlockProps({ className: 'py-16 text-center space-y-4' })}>\n      <h1 className="text-4xl font-serif text-slate-900">{attributes.headline}</h1>\n      <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md active:scale-95 transition-transform">\n        {attributes.ctaText}\n      </button>\n    </div>\n  ),\n  save: () => null\n});`,
  },
];

export const GutenbergScaffolder: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = SAMPLE_BLOCKS[selectedIdx];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Block code copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Gutenberg Block React & Tailwind Scaffolder</h2>
              <p className="text-xs text-muted-foreground">
                AI agents can generate full custom Gutenberg blocks (`block.json`, React editor components, and Tailwind styling) in seconds.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 text-xs font-mono font-semibold">
            MCP Tool: scaffold_gutenberg_block
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 pt-2">
          {SAMPLE_BLOCKS.map((b, idx) => (
            <button
              key={b.slug}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {b.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* block.json */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>block.json (WordPress Metadata)</span>
            </span>
            <button
              onClick={() => handleCopy(active.blockJson)}
              className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Copy JSON"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed">{active.blockJson}</pre>
          </div>
        </div>

        {/* React Component */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>edit.tsx (React & Tailwind Component)</span>
            </span>
            <button
              onClick={() => handleCopy(active.reactComponent)}
              className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Copy Component"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed">{active.reactComponent}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
