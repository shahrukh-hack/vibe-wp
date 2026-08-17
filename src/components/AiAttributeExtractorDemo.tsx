import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Filter, Check, Tag, ArrowRight, Download, RefreshCw, CheckCircle2 } from 'lucide-react';
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
    id: 401,
    title: 'Men Premium Heavyweight Hoodie in Navy Blue (Size XL)',
    description: 'Crafted from 100% organic cotton French terry. Features reinforced stitching, ribbed cuffs, and wireless earbud pocket.',
    isExtracted: false,
  },
  {
    id: 402,
    title: 'Vibe Gaming Monitor 27-inch 420Hz Refresh Rate (Thunderbolt 4)',
    description: 'Ultra-low latency IPS gaming display featuring 512GB fast firmware storage and aluminum stand with USB-C power delivery.',
    isExtracted: false,
  },
  {
    id: 403,
    title: 'Italian Leather Bifold Wallet in Slate Grey',
    description: 'Handmade full-grain leather wallet with MagSafe compatibility and RFID blocking titanium mesh.',
    isExtracted: false,
  },
];

export const AiAttributeExtractorDemo: React.FC = () => {
  const [products, setProducts] = useState<ProductRaw[]>(SAMPLE_RAW_PRODUCTS);
  const [isProcessing, setIsProcessing] = useState<number | null>(null);

  const handleExtract = (id: number) => {
    setIsProcessing(id);
    setTimeout(() => {
      setProducts(
        products.map((p) => {
          if (p.id === id) {
            let extracted: Record<string, string> = {};
            if (id === 401) {
              extracted = { Color: 'Navy Blue', Material: '100% Organic Cotton', Size: 'XL', Style: 'Heavyweight Hoodie' };
            } else if (id === 402) {
              extracted = { 'Refresh Rate': '420Hz', 'Screen Size': '27-inch', Connectivity: 'Thunderbolt 4 / USB-C', Material: 'Aluminum' };
            } else {
              extracted = { Color: 'Slate Grey', Material: 'Italian Leather', Security: 'RFID Titanium', Type: 'Bifold Wallet' };
            }
            return { ...p, extracted, isExtracted: true };
          }
          return p;
        })
      );
      setIsProcessing(null);
      toast.success(`[AI Extractor] 4 structured attributes extracted & converted to pa_* taxonomy!`);
    }, 450);
  };

  const handleExtractAll = () => {
    setIsProcessing(999);
    setTimeout(() => {
      setProducts(
        products.map((p) => {
          let extracted: Record<string, string> = {};
          if (p.id === 401) extracted = { Color: 'Navy Blue', Material: '100% Organic Cotton', Size: 'XL', Style: 'Heavyweight' };
          else if (p.id === 402) extracted = { 'Refresh Rate': '420Hz', 'Screen Size': '27-inch', Connectivity: 'Thunderbolt 4' };
          else extracted = { Color: 'Slate Grey', Material: 'Italian Leather', Security: 'RFID' };
          return { ...p, extracted, isExtracted: true };
        })
      );
      setIsProcessing(null);
      toast.success('All WooCommerce products processed into faceted filter attributes!');
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">WooCommerce AI Attribute Extractor & Filter Generator</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-pink-500/10 text-pink-600 border border-pink-500/20 uppercase">
                  WordPress Plugin Included
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Parses unstructured text in product titles & descriptions, extracts structured attributes, and registers filterable WooCommerce taxonomies (<code>pa_*</code>).
              </p>
            </div>
          </div>

          <button
            onClick={handleExtractAll}
            disabled={isProcessing !== null}
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            {isProcessing === 999 ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>Bulk Extract All Products</span>
          </button>
        </div>
      </div>

      {/* Interactive Products Table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-foreground">WOOCOMMERCE CATALOG ATTRIBUTE STATUS</span>
          <span className="text-xs font-mono text-muted-foreground">Faceted Layered Navigation Ready</span>
        </div>

        <div className="divide-y divide-border">
          {products.map((product) => (
            <div key={product.id} className="p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-muted text-muted-foreground">
                    ID: #{product.id}
                  </span>
                  {product.isExtracted ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Taxonomy Attributes Active (pa_*)
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
                  <div className="grid grid-cols-2 gap-1.5">
                    {Object.entries(product.extracted).map(([k, v]) => (
                      <div key={k} className="px-2.5 py-1 rounded-lg bg-muted text-[11px] font-mono text-foreground border border-border/60">
                        <span className="text-primary font-bold">pa_{k.toLowerCase()}:</span> <span>{v}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleExtract(product.id)}
                    disabled={isProcessing === product.id}
                    className="px-4 py-2 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors flex items-center gap-1.5"
                  >
                    {isProcessing === product.id ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3 text-pink-500" />}
                    <span>Extract AI Attributes</span>
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
