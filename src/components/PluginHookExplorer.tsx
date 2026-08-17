import React, { useState } from 'react';
import { Network, Check, Shield, Search, Box, Zap, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

interface WpHook {
  name: string;
  type: 'action' | 'filter';
  plugin: string;
  priority: number;
  description: string;
}

const SAMPLE_HOOKS: WpHook[] = [
  { name: 'woocommerce_before_checkout_form', type: 'action', plugin: 'WooCommerce Core', priority: 10, description: 'Fires before the checkout form fields are rendered.' },
  { name: 'acf/save_post', type: 'action', plugin: 'Advanced Custom Fields PRO', priority: 20, description: 'Triggered whenever ACF post metadata is saved.' },
  { name: 'the_content', type: 'filter', plugin: 'WordPress Core', priority: 10, description: 'Filters the post content before display in template hierarchy.' },
  { name: 'woocommerce_cart_calculate_fees', type: 'action', plugin: 'WooCommerce Core', priority: 10, description: 'Adds custom surcharges or discount fees to cart total.' },
  { name: 'wp_rest_server_before_serve_request', type: 'filter', plugin: 'REST API', priority: 10, description: 'Modifies REST API responses before headers are dispatched.' },
];

export const PluginHookExplorer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = SAMPLE_HOOKS.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase()) || h.plugin.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'all' || h.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">WordPress Actions, Filters & Hook Dependency Explorer</h2>
              <p className="text-xs text-muted-foreground">
                Inspect active hooks, priorities, and plugin event cascades to safely inject PHP callbacks without breaking existing functionality.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 text-xs font-mono font-semibold">
            MCP Tool: inspect_wp_hooks
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hooks by name or plugin..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-1.5">
            {['all', 'action', 'filter'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase font-mono transition-all ${
                  filterType === t
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hook List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((hook) => (
          <div
            key={hook.name}
            className="p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                    hook.type === 'action'
                      ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      : 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
                  }`}
                >
                  {hook.type}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">Priority: {hook.priority}</span>
              </div>
              <h4 className="text-sm font-mono font-bold text-foreground truncate">{hook.name}</h4>
              <p className="text-xs text-muted-foreground">{hook.description}</p>
            </div>

            <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Plugin: {hook.plugin}</span>
              <span className="text-emerald-500 flex items-center gap-1">
                <Check className="w-3 h-3" /> Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
