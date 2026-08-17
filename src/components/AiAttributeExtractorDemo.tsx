import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Filter, Check, Tag, ArrowRight, RefreshCw, CheckCircle2, Cpu, Brain, ShieldCheck, Zap, Server, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface ProductRaw {
  id: number;
  title: string;
  sku: string;
  description: string;
  extracted?: Record<string, string>;
  isExtracted: boolean;
  amazonReady?: boolean;
}

const SAMPLE_RAW_PRODUCTS: ProductRaw[] = [
  {
    id: 701,
    title: 'Dell Latitude 5540 15.6" Laptop (Intel i7-1355U, 32GB RAM, 512GB SSD, Windows 11 Pro)',
    sku: 'DELL-LAT-5540-I7',
    description: 'High-performance commercial business laptop featuring 54Wh ExpressCharge battery, Type I AU power delivery cord, and 3-Year ProSupport Onsite Warranty.',
    isExtracted: false,
  },
  {
    id: 702,
    title: 'Ubiquiti UniFi Pro 24 PoE Switch (USW-Pro-24-POE, 400W PoE Budget, 2x 10G SFP+)',
    sku: 'UBI-USW-PRO-24-POE',
    description: 'Layer 3 enterprise managed network switch with 400W total PoE+ delivery, auto-switching 100-240V internal PSU, and silent cooling in 19" rackmount housing.',
    isExtracted: false,
  },
  {
    id: 703,
    title: 'Hikvision 8MP 4K ColorVu Turret IP Security Camera (DS-2CD2387G2-LU, 2.8mm Lens)',
    sku: 'HIK-DS-2CD2387G2-LU',
    description: '24/7 vivid full-color night vision surveillance camera with built-in microphone, IP67 weatherproof housing, and 48V PoE / 12V DC power support.',
    isExtracted: false,
  },
];

const AMAZON_MANDATORY_FIELDS = [
  { field: 'brand', wc: 'pa_brand', rule: 'MANDATORY', sample: 'Dell, Ubiquiti, Hikvision, Cisco' },
  { field: 'manufacturer_part_number', wc: 'pa_mpn', rule: 'MANDATORY', sample: 'DELL-LAT-5540-I7, USW-Pro-24-POE' },
  { field: 'dangerous_goods_regulations', wc: 'pa_dangerous_goods', rule: 'MANDATORY', sample: 'Lithium Ion (UN3481) / Not Applicable' },
  { field: 'batteries_required', wc: 'pa_batteries_required', rule: 'MANDATORY', sample: 'Yes (Laptops/UPS) / No (Switches/Cameras)' },
  { field: 'power_plug_type', wc: 'pa_plug_type', rule: 'MANDATORY (AU)', sample: 'Type I (AU Standard 3-Pin)' },
  { field: 'voltage', wc: 'pa_voltage', rule: 'MANDATORY', sample: '240V AC (AU) / 48V PoE / 12V DC' },
  { field: 'country_of_origin', wc: 'pa_country_of_origin', rule: 'MANDATORY', sample: 'AU / TW / US / CN' },
  { field: 'bullet_point_1..5', wc: 'pa_bullet_point_*', rule: 'RECOMMENDED', sample: '5 AI-Generated Feature Bullet Points' },
];

export const AiAttributeExtractorDemo: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'amazon' | 'woocommerce'>('amazon');
  const [products, setProducts] = useState<ProductRaw[]>(SAMPLE_RAW_PRODUCTS);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processedCount, setProcessedCount] = useState(0);

  const handleExtractSingle = (id: number) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          let extracted: Record<string, string> = {};
          if (id === 701) {
            extracted = {
              Brand: 'Dell',
              MPN: 'DELL-LAT-5540-I7',
              'Dangerous Goods': 'Lithium Ion (UN3481)',
              'Batteries Required': 'Yes',
              'Plug Type': 'Type I (AU Standard)',
              Voltage: '240V AC (AU)',
              RAM: '32GB',
              Storage: '512GB SSD',
              OS: 'Windows 11 Pro',
              'Screen Size': '15.6-inch',
            };
          } else if (id === 702) {
            extracted = {
              Brand: 'Ubiquiti',
              MPN: 'USW-PRO-24-POE',
              'Dangerous Goods': 'Not Applicable',
              'Batteries Required': 'No',
              'Plug Type': 'Type I (AU Standard)',
              Voltage: '100-240V AC',
              'Port Count': '24-Port',
              'PoE Budget': '400W PoE+',
              'Network Speed': '10G SFP+',
            };
          } else {
            extracted = {
              Brand: 'Hikvision',
              MPN: 'DS-2CD2387G2-LU',
              'Dangerous Goods': 'Not Applicable',
              'Batteries Required': 'No',
              Voltage: '48V PoE / 12V DC',
              Resolution: '8MP 4K UHD',
              'Lens Focal': '2.8mm (Wide)',
              'Night Vision': 'ColorVu 24/7 Full Color',
            };
          }
          return { ...p, extracted, isExtracted: true, amazonReady: true };
        }
        return p;
      })
    );
    toast.success(`Amazon Mandatory Attributes & Hardware Taxonomies bound to product #${id}!`);
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
              if (p.id === 701) extracted = { Brand: 'Dell', MPN: 'DELL-LAT-5540', Hazmat: 'UN3481', RAM: '32GB', OS: 'Win 11 Pro', Plug: 'Type I AU' };
              else if (p.id === 702) extracted = { Brand: 'Ubiquiti', MPN: 'USW-24-POE', Ports: '24-Port', PoE: '400W', Plug: 'Type I AU' };
              else extracted = { Brand: 'Hikvision', MPN: 'DS-2CD2387G2', Res: '8MP 4K', NightVision: 'ColorVu', Plug: 'PoE 48V' };
              return { ...p, extracted, isExtracted: true, amazonReady: true };
            })
          );
          toast.success('🎉 7,420 Feed Products Extracted for WooCommerce & Amazon SP-API!');
          return 100;
        }
        const next = prev + 20;
        setProcessedCount(Math.min(7420, Math.round((next / 100) * 7420)));
        return next;
      });
    }, 350);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Amazon Marketplace Badge */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600 flex items-center justify-center text-white shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">AI Attribute Extractor (Amazon Seller Central & WooCommerce)</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 uppercase">
                  Amazon SP-API Ready
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Extracts mandatory Amazon Seller Central attributes (Brand, MPN, Hazmat UN3481, Type I AU Plug, Voltage, Bullet Points) and faceted WooCommerce taxonomies.
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/70 border border-border">
            <button
              onClick={() => setSelectedMode('amazon')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedMode === 'amazon'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              🛒 Amazon Seller Central Mode
            </button>
            <button
              onClick={() => setSelectedMode('woocommerce')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedMode === 'woocommerce'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              🛍️ WooCommerce Facet Mode
            </button>
          </div>
        </div>

        {/* 4 Compliance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
            <div className="text-[10px] font-mono font-bold text-amber-600 uppercase">Brand Registry</div>
            <div className="text-xs font-bold text-foreground mt-0.5">Exact Case Matched</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/15">
            <div className="text-[10px] font-mono font-bold text-rose-600 uppercase">Hazmat / Battery</div>
            <div className="text-xs font-bold text-foreground mt-0.5">UN3481 Auto-Classified</div>
          </div>
          <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/15">
            <div className="text-[10px] font-mono font-bold text-blue-600 uppercase">Power Standard</div>
            <div className="text-xs font-bold text-foreground mt-0.5">Type I AU (240V AC)</div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
            <div className="text-[10px] font-mono font-bold text-emerald-600 uppercase">Nightly Feed Batch</div>
            <div className="text-xs font-bold text-foreground mt-0.5">7,000+ Scalable</div>
          </div>
        </div>

        {/* ActionScheduler Batch Trigger */}
        <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            <strong className="text-foreground">7,420 IT / AV / CCTV Catalog Ready:</strong> Automatically syncs with Amazon SP-API and WooCommerce Layered Navigation.
          </div>

          <button
            onClick={handleRunBatch7000}
            disabled={isProcessing}
            className="px-5 py-2.5 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            {isProcessing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>Run 7,000+ Amazon & Feed Batch</span>
          </button>
        </div>

        {/* Progress Bar */}
        {isProcessing && (
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground font-bold">ActionScheduler Progress: {progress}%</span>
              <span className="text-amber-600 font-bold">{processedCount} / 7,420 Products Extracted</span>
            </div>
            <div className="w-full bg-muted h-2.5 rounded-full overflow-hidden">
              <div className="bg-amber-600 h-full transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>

      {/* Amazon Mandatory Attributes Table */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Amazon Seller Central Mandatory Attribute Mapping</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            These attributes are strictly required by Amazon Selling Partner API (SP-API) to list and buy-box electronics without feed rejection:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-muted-foreground font-mono uppercase text-[10px]">
                <th className="py-2.5 px-3">Amazon SP-API Field</th>
                <th className="py-2.5 px-3">WooCommerce Taxonomy</th>
                <th className="py-2.5 px-3">Amazon Requirement</th>
                <th className="py-2.5 px-3">Auto-Extracted Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {AMAZON_MANDATORY_FIELDS.map((item) => (
                <tr key={item.field} className="hover:bg-muted/20">
                  <td className="py-2.5 px-3 font-mono font-bold text-amber-600">{item.field}</td>
                  <td className="py-2.5 px-3 font-mono text-primary">{item.wc}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      item.rule.includes('MANDATORY') ? 'bg-rose-500/10 text-rose-600' : 'bg-blue-500/10 text-blue-600'
                    }`}>
                      {item.rule}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-mono text-foreground">{item.sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Feed Products List */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-foreground">ENTERPRISE IT & SECURITY FEED CATALOG</span>
          <span className="text-xs font-mono text-amber-600 font-semibold">✔ Amazon SP-API & Facet Ready</span>
        </div>

        <div className="divide-y divide-border">
          {products.map((product) => (
            <div key={product.id} className="p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-muted text-muted-foreground">
                    SKU: {product.sku}
                  </span>
                  {product.isExtracted ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Amazon SP-API & WooCommerce Verified
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      ⚠️ Unextracted Feed Data
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
                        <span className="text-amber-600 dark:text-amber-400 font-bold">{k}:</span> <span>{v}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => handleExtractSingle(product.id)}
                    className="px-4 py-2 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Extract Amazon Specs</span>
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
