import React, { useState } from 'react';
import { Gauge, Check, Trash2, ShieldCheck, Sparkles, FileCode, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface EnqueuedAsset {
  handle: string;
  type: 'css' | 'js';
  plugin: string;
  sizeKb: number;
  isUsedOnCurrentPage: boolean;
  dequeued: boolean;
}

const INITIAL_ASSETS: EnqueuedAsset[] = [
  { handle: 'elementor-frontend-js', type: 'js', plugin: 'Elementor', sizeKb: 148, isUsedOnCurrentPage: false, dequeued: false },
  { handle: 'contact-form-7-css', type: 'css', plugin: 'Contact Form 7', sizeKb: 34, isUsedOnCurrentPage: false, dequeued: false },
  { handle: 'wc-add-to-cart-js', type: 'js', plugin: 'WooCommerce', sizeKb: 62, isUsedOnCurrentPage: true, dequeued: false },
  { handle: 'generatepress-style', type: 'css', plugin: 'GeneratePress Theme', sizeKb: 18, isUsedOnCurrentPage: true, dequeued: false },
];

export const AssetAuditor: React.FC = () => {
  const [assets, setAssets] = useState<EnqueuedAsset[]>(INITIAL_ASSETS);

  const handleDequeue = (handle: string) => {
    setAssets(assets.map((a) => (a.handle === handle ? { ...a, dequeued: true } : a)));
    toast.success(`Dequeued unused asset '${handle}' via wp_dequeue_script()!`);
  };

  const totalSaved = assets.filter((a) => a.dequeued).reduce((sum, a) => sum + a.sizeKb, 0);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-rose-600 flex items-center justify-center text-white shadow-md">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Enqueued Asset & Core Web Vitals Auditor</h2>
              <p className="text-xs text-muted-foreground">
                Detects unused plugin CSS/JS enqueued across pages and generates surgical `wp_dequeue_script()` directives.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 text-xs font-mono font-semibold">
            Feature 4: audit_enqueued_assets
          </div>
        </div>

        {totalSaved > 0 && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 font-bold">
            🎉 Core Web Vitals Optimized: Saved {totalSaved} KB of render-blocking payload!
          </div>
        )}
      </div>

      {/* Asset List */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="divide-y divide-border">
          {assets.map((asset) => (
            <div key={asset.handle} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-muted text-muted-foreground">
                    {asset.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground">{asset.handle}</span>
                  <span className="text-[11px] font-mono text-muted-foreground">({asset.sizeKb} KB)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Plugin: {asset.plugin}</span>
                  <span>•</span>
                  {asset.isUsedOnCurrentPage ? (
                    <span className="text-emerald-500 font-semibold">Used on this page</span>
                  ) : (
                    <span className="text-amber-500 font-semibold">⚠️ Unused Bloat on Blog/Single</span>
                  )}
                </div>
              </div>

              <div>
                {asset.dequeued ? (
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-mono font-bold">
                    ✔ Dequeued
                  </span>
                ) : !asset.isUsedOnCurrentPage ? (
                  <button
                    onClick={() => handleDequeue(asset.handle)}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Dequeue Asset</span>
                  </button>
                ) : (
                  <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-mono">
                    Essential
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
