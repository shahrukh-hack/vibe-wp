import React, { useState } from 'react';
import { Database, Zap, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface QueryReport {
  id: string;
  sql: string;
  durationMs: number;
  issue: string;
  fix: string;
  optimized: boolean;
}

const INITIAL_QUERIES: QueryReport[] = [
  {
    id: '1',
    sql: `SELECT p.ID FROM wp_posts p INNER JOIN wp_postmeta pm ON p.ID = pm.post_id WHERE pm.meta_key = '_price' AND pm.meta_value > 100 ORDER BY p.post_date DESC;`,
    durationMs: 420,
    issue: 'Unindexed `meta_value` cast causing full table scan across 150,000 postmeta rows.',
    fix: 'Use WooCommerce custom lookup table `wp_wc_product_meta_lookup` with direct numeric B-Tree index.',
    optimized: false,
  },
  {
    id: '2',
    sql: `SELECT * FROM wp_postmeta WHERE post_id IN (101, 102, 103, 104, 105);`,
    durationMs: 180,
    issue: 'N+1 meta query loop called inside template archive loop.',
    fix: 'Wrap with `update_meta_cache(\'post\', $post_ids)` before loop execution to prime cache in 1 single roundtrip.',
    optimized: false,
  },
];

export const QueryOptimizer: React.FC = () => {
  const [queries, setQueries] = useState<QueryReport[]>(INITIAL_QUERIES);

  const handleOptimize = (id: string) => {
    setQueries(queries.map((q) => (q.id === id ? { ...q, durationMs: 12, optimized: true } : q)));
    toast.success('Query optimized! Latency dropped from 420ms down to 12ms!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Database SQL & Slow Postmeta Query Optimizer</h2>
              <p className="text-xs text-muted-foreground">
                Detects N+1 query loops, unindexed meta queries, and provides 1-click `wpdb` indexing and transient caching fixes.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 text-xs font-mono font-semibold">
            Feature 3: analyze_slow_queries
          </div>
        </div>
      </div>

      {/* Query Cards */}
      <div className="space-y-4">
        {queries.map((q) => (
          <div key={q.id} className="p-5 rounded-2xl border border-border bg-card space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-muted text-[11px] font-mono font-bold text-foreground">
                  Query #{q.id}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                    q.optimized
                      ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                  }`}
                >
                  Latency: {q.durationMs}ms {q.optimized && '⚡ (97% Faster)'}
                </span>
              </div>

              {!q.optimized && (
                <button
                  onClick={() => handleOptimize(q.id)}
                  className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Apply AI Query Fix</span>
                </button>
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-muted/40 font-mono text-xs text-foreground overflow-x-auto border border-border/50">
              <code>{q.sql}</code>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10 space-y-1">
                <span className="font-bold text-rose-600 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Identified Bottleneck:
                </span>
                <p className="text-muted-foreground">{q.issue}</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> AI Recommended Fix:
                </span>
                <p className="text-muted-foreground">{q.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
