import React, { useState } from 'react';
import { Layers, Copy, Check, Sparkles, Code2, Download } from 'lucide-react';
import { toast } from 'sonner';

const SAMPLE_SCHEMAS = [
  {
    name: 'ACF PRO Case Study Schema',
    ts: `import { z } from 'zod';\n\n// 1. Zod Runtime Validator\nexport const CaseStudySchema = z.object({\n  id: z.number(),\n  slug: z.string(),\n  title: z.string(),\n  clientName: z.string(),\n  budgetAud: z.number(),\n  roiMetric: z.string(),\n  deliverables: z.array(z.string()),\n  heroImage: z.string().url(),\n});\n\n// 2. TypeScript Static Type\nexport type CaseStudy = z.infer<typeof CaseStudySchema>;`,
  },
  {
    name: 'WooCommerce Headless Product Schema',
    ts: `import { z } from 'zod';\n\nexport const WcProductSchema = z.object({\n  id: z.number(),\n  sku: z.string(),\n  name: z.string(),\n  price: z.string(),\n  stockQuantity: z.number(),\n  attributes: z.record(z.string()),\n  categories: z.array(z.string()),\n});\n\nexport type WcProduct = z.infer<typeof WcProductSchema>;`,
  },
];

export const HeadlessTypeGenerator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = SAMPLE_SCHEMAS[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.ts);
    toast.success('TypeScript & Zod schemas copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Headless TypeScript & Zod Schema Generator</h2>
              <p className="text-xs text-muted-foreground">
                Instantly convert ACF PRO field groups, JetEngine post types, and WooCommerce objects into 100% type-safe TypeScript interfaces for Next.js & React.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 text-xs font-mono font-semibold">
            Feature 2: generate_wp_types
          </div>
        </div>

        {/* Schema Switcher */}
        <div className="flex items-center gap-2 pt-2">
          {SAMPLE_SCHEMAS.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Block */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
        <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">Generated TypeScript & Zod Contract (types/wp.ts)</span>
          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy TypeScript Code</span>
          </button>
        </div>
        <div className="p-4 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
          <pre className="leading-relaxed text-blue-600 dark:text-blue-400">{active.ts}</pre>
        </div>
      </div>
    </div>
  );
};
