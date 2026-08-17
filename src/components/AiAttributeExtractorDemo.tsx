import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Filter, Check, Tag, ArrowRight, RefreshCw, CheckCircle2, Clock, Database, ShieldCheck, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface ProductRaw {
  id: number;
  title: string;
  description: string;
  extracted?: Record<string, string>;
  isExtracted: boolean;
}

const SAMPLE_RAW_PRODUCTS: ProductRaw[] = [
  {
    id: 501,
    title: 'Dell XPS 15 Laptop (Intel Core i7-13700H, 32GB DDR5 RAM, 1TB NVMe SSD)',
    description: 'Stunning 15.6-inch 4K UHD display, pre-installed with Windows 11 Pro in Platinum Silver finish.',
    isExtracted: false,
  },
  {
    id: 502,
    title: 'Apple MacBook Pro 16-inch M3 Max (64GB Unified Memory, 2TB Storage)',
    description: 'Liquid Retina XDR screen resolution, macOS Sonoma, 120Hz ProMotion display in Space Grey finish.',
    isExtracted: false,
  },
  {
    id: 503,
    title: 'ASUS ROG Swift Gaming Display 27-inch 420Hz OLED (1440p QHD)',
    description: 'Ultra-low latency 0.03ms response with USB-C and Thunderbolt 4 connectivity in Matte Black.',
    isExtracted: false,
  },
];

const CANONICAL_MAP = [
  { taxonomy: 'pa_ram', label: 'RAM', synonyms: 'memory, system memory, ram size, ddr4/5', sample: '32GB, 64GB' },
  { taxonomy: 'pa_os', label: 'Operating System', synonyms: 'os, platform, operating system', sample: 'Windows 11 Pro, macOS Sonoma' },
  { taxonomy: 'pa_screen_size', label: 'Screen Size', synonyms: 'display size, screen, diagonal', sample: '15.6-inch, 16-inch, 27-inch' },
  { taxonomy: 'pa_resolution', label: 'Resolution', synonyms: 'resolution, native resolution, display', sample: '4K UHD, 1440p QHD' },
  { taxonomy: 'pa_storage', label: 'Storage Capacity', synonyms: 'ssd, hard drive, capacity, nvme', sample: '1TB, 2TB NVMe' },
  { taxonomy: 'pa_cpu', label: 'Processor (CPU)', synonyms: 'cpu, processor, chipset, soc', sample: 'Intel Core i7, Apple M3 Max' },
  { taxonomy: 'pa_color', label: 'Color', synonyms: 'color, colour, finish', sample: 'Platinum Silver, Space Grey' },
  { taxonomy: 'pa_refresh_rate', label: 'Refresh Rate', synonyms: 'hz, hertz, refresh rate', sample: '120Hz, 420Hz' },
];

export const AiAttributeExtractorDemo: React.FC = () => {
  const [products, setProducts] = useState<ProductRaw[]>(SAMPLE_RAW_PRODUCTS);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processedCount, setProcessedCount] = useState(0);

  const handleExtract = (id: number) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          let extracted: Record<string, string> = {};
          if (id === 501) {
            extracted = { RAM: '32GB', OS: 'Windows 11 Pro', 'Screen Size': '15.6-inch', Resolution: '4K UHD', Storage: '1TB', CPU: 'Intel Core i7', Color: 'Platinum Silver' };
          } else if (id === 502) {
            extracted = { RAM: '64GB', OS: 'macOS Sonoma', 'Screen Size': '16-inch', Storage: '2TB', CPU: 'Apple M3 Max', 'Refresh Rate': '120Hz', Color: 'Space Grey' };
          } else {
            extracted = { 'Screen Size': '27-inch', 'Refresh Rate': '420Hz', Resolution: '1440p QHD', Color: 'Matte Black' };
          }
          return { ...p, extracted, isExtracted: true };
        }
        return p;
      })
    );
    toast.success(`Canonical taxonomies (pa_ram, pa_os, pa_screen_size, pa_resolution) created and bound to product #${id}!`);
  };

  const handleRunBatch7000 = () => {
    setIsProcessing(true);
    setProgress(0);
    setProcessedCount(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setProducts(
            products.map((p) => {
              let extracted: Record<string, string> = {};
              if (p.id === 501) extracted = { RAM: '32GB', OS: 'Windows 11 Pro', 'Screen Size': '15.6-inch', Resolution: '4K UHD', Storage: '1TB', CPU: 'Intel Core i7' };
              else if (p.id === 502) extracted = { RAM: '64GB', OS: 'macOS Sonoma', 'Screen Size': '16-inch', Storage: '2TB', CPU: 'Apple M3 Max' };
              else extracted = { 'Screen Size': '27-inch', 'Refresh Rate': '420Hz', Resolution: '1440p QHD' };
              return { ...p, extracted, isExtracted: true };
            })
          );
          toast.success('🎉 7,420 Feed Products Processed & Normalized into Filterable Taxonomies!');
          return 100;
        }
        const next = prev + 20;
        setProcessedCount(Math.min(7420, Math.round((next / 100) * 7420)));
        return next;
      });
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Nightly Feed Metrics */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">WooCommerce Enterprise AI Attribute Engine</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 uppercase">
                  v2.0 (Feed Hooks & Batch Queue)
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Automated attribute extraction from nightly CSV/XML feeds with ActionScheduler background queue (7,000+ products) and Canonical Taxonomy Normalization.
              </p>
            </div>
          </div>

          {/* 3 Metric Badges */}
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 rounded-xl bg-muted/60 border border-border text-center">
              <div className="text-[10px] font-mono text-muted-foreground font-bold uppercase">Store Feed Catalog</div>
              <div className="text-sm font-bold text-foreground font-mono">7,420 Products</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <div className="text-[10px] font-mono text-emerald-600 font-bold uppercase">Nightly Cron Hook</div>
              <div className="text-sm font-bold text-emerald-600 font-mono">Active (0.001s Sync)</div>
            </div>
          </div>
        </div>

        {/* ActionScheduler 7,000+ Trigger */}
        <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>ActionScheduler Async Batch Processing:</span>
            </div>
            <p>Processes 7,000+ products in background chunks of 50 without server timeouts or memory exhaustion.</p>
          </div>

          <button
            onClick={handleRunBatch7000}
            disabled={isProcessing}
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>Run 7,000+ Feed Batch Extraction</span>
          </button>
        </div>

        {/* Progress Bar */}
        {isProcessing && (
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground font-bold">ActionScheduler Progress: {progress}%</span>
              <span className="text-primary font-bold">{processedCount} / 7,420 Products Processed</span>
            </div>
            <div className="w-full bg-muted h-2.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Canonical Dictionary Table */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Canonical Attribute Normalization Dictionary</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Solves attribute fragmentation: Guarantees that variations like <em>"System RAM"</em>, <em>"Memory"</em>, and <em>"RAM Size"</em> all map strictly to the exact same <strong><code>pa_ram</code></strong> filter!
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-muted-foreground font-mono uppercase text-[10px]">
                <th className="py-2.5 px-3">WooCommerce Taxonomy</th>
                <th className="py-2.5 px-3">Canonical Filter Name</th>
                <th className="py-2.5 px-3">Synonyms Mapped</th>
                <th className="py-2.5 px-3">Standardized Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {CANONICAL_MAP.map((item) => (
                <tr key={item.taxonomy} className="hover:bg-muted/20">
                  <td className="py-2.5 px-3 font-mono font-bold text-primary">{item.taxonomy}</td>
                  <td className="py-2.5 px-3 font-bold text-foreground">{item.label}</td>
                  <td className="py-2.5 px-3 text-muted-foreground">{item.synonyms}</td>
                  <td className="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{item.sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Feed Products List */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-foreground">SAMPLE FEED PRODUCTS (7,000+ CATALOG)</span>
          <span className="text-xs font-mono text-emerald-600 font-semibold">✔ Faceted Filters Active</span>
        </div>

        <div className="divide-y divide-border">
          {products.map((product) => (
            <div key={product.id} className="p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-muted text-muted-foreground">
                    Feed SKU: #{product.id}
                  </span>
                  {product.isExtracted ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Standardized Attributes Bound (pa_*)
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      ⚠️ Unstructured Text (Unfilterable)
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-foreground">{product.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Extracted Taxonomy Pills or Action */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                {product.isExtracted && product.extracted ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {Object.entries(product.extracted).map(([k, v]) => (
                      <div key={k} className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-mono text-foreground border border-border/60">
                        <span className="text-primary font-bold">{k}:</span> <span>{v}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleExtract(product.id)}
                    className="px-4 py-2 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    <span>Extract Product</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
