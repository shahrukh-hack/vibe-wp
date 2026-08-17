import React, { useState } from 'react';
import { Brain, Sparkles, Check, Tag, Clock, Plus, RefreshCw, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface WpMemoryItem {
  id: string;
  category: 'cpt' | 'theme_override' | 'builder_pref' | 'security';
  title: string;
  detail: string;
  tags: string[];
  date: string;
}

const INITIAL_WP_MEMORIES: WpMemoryItem[] = [
  {
    id: '1',
    category: 'builder_pref',
    title: 'Bricks Global Typography & Palette',
    detail: 'Use 420Hz spring motion for all interactive CTA elements and sync colors with Bricks Global Palette ID #bg-primary.',
    tags: ['#bricks', '#motion', '#pref'],
    date: '2026-08-17',
  },
  {
    id: '2',
    category: 'cpt',
    title: 'ACF PRO Case Study Schema',
    detail: 'Registered custom post type `case_study` with ACF repeater `project_milestones` and REST API support.',
    tags: ['#acf', '#cpt', '#schema'],
    date: '2026-08-17',
  },
  {
    id: '3',
    category: 'theme_override',
    title: 'GeneratePress Hook Filter',
    detail: 'Hooked modern header navigation into `generate_after_header` with priority 15, bypassing default template header.',
    tags: ['#generatepress', '#hooks'],
    date: '2026-08-17',
  },
  {
    id: '4',
    category: 'security',
    title: 'WooCommerce Checkout Nonce Enforcement',
    detail: 'Enforce wp_verify_nonce() on all custom checkout cart calculation endpoints to block replay attacks.',
    tags: ['#woocommerce', '#security'],
    date: '2026-08-17',
  },
];

export const PersistentWpMemory: React.FC = () => {
  const [memories, setMemories] = useState<WpMemoryItem[]>(INITIAL_WP_MEMORIES);
  const [newTitle, setNewTitle] = useState('');
  const [newDetail, setNewDetail] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDetail.trim()) return;

    const item: WpMemoryItem = {
      id: Date.now().toString(),
      category: 'builder_pref',
      title: newTitle.trim(),
      detail: newDetail.trim(),
      tags: ['#wp', '#adaptive', '#memory'],
      date: new Date().toISOString().split('T')[0],
    };

    setMemories([item, ...memories]);
    setNewTitle('');
    setNewDetail('');
    toast.success('WordPress architectural decision saved to persistent memory!');
  };

  const handleCopyMarkdown = () => {
    const md = memories
      .map(
        (m) =>
          `### [${m.category.toUpperCase()}] ${m.title}\n${m.detail}\nTags: ${m.tags.join(', ')} | Date: ${m.date}`
      )
      .join('\n\n');
    navigator.clipboard.writeText(md);
    toast.success('Persistent memory exported as Markdown!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">WordPress Persistent Project Memory</h2>
              <p className="text-xs text-muted-foreground">
                Maintains site-specific architectural decisions, active page builder tokens, CPT definitions, and security rules across all AI agent sessions.
              </p>
            </div>
          </div>
          <button
            onClick={handleCopyMarkdown}
            className="px-3.5 py-1.5 rounded-xl border border-border bg-card text-xs font-semibold text-foreground hover:bg-muted transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Export AGENT_MEMORY.md</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Decision Title (e.g. Kadence Palette Sync)..."
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            value={newDetail}
            onChange={(e) => setNewDetail(e.target.value)}
            placeholder="Details & Hook Overrides..."
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-1"
          />
          <button
            type="submit"
            disabled={!newTitle.trim() || !newDetail.trim()}
            className="py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 disabled:opacity-50"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Record Decision</span>
          </button>
        </form>
      </div>

      {/* Memory Ledger Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {memories.map((m) => (
          <div
            key={m.id}
            className="p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-primary/10 text-primary">
                  {m.category.replace('_', ' ')}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">{m.date}</span>
              </div>
              <h4 className="text-sm font-bold text-foreground">{m.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.detail}</p>
            </div>

            <div className="pt-2 border-t border-border/60 flex items-center gap-1.5 flex-wrap">
              {m.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-muted text-[10px] font-mono text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
