import React, { useState } from 'react';
import { ShoppingBag, Package, DollarSign, RefreshCw, Plus, Check, Search, Tag } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: number;
  sku: string;
  name: string;
  price: string;
  stock: number;
  category: string;
  status: 'instock' | 'lowstock' | 'outofstock';
}

const INITIAL_PRODUCTS: Product[] = [
  { id: 101, sku: 'VIBE-SK-01', name: 'Vibe Superkit Pro Bundle', price: '149.00', stock: 54, category: 'Software', status: 'instock' },
  { id: 102, sku: 'VIBE-MEM-02', name: 'Vibe Memory Enterprise Seat', price: '299.00', stock: 12, category: 'SaaS License', status: 'lowstock' },
  { id: 103, sku: 'VIBE-SKILL-03', name: '50-Skill Mega Arsenal Pack', price: '99.00', stock: 88, category: 'Digital Asset', status: 'instock' },
  { id: 104, sku: 'VIBE-WP-04', name: 'Vibe WP Headless MCP Server', price: '199.00', stock: 0, category: 'Plugin Suite', status: 'outofstock' },
];

export const WooCommerceManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [search, setSearch] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdatePrice = (id: number, newPrice: string) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, price: newPrice } : p)));
    toast.success(`WooCommerce product #${id} price updated to $${newPrice}!`);
  };

  const handleRestock = (id: number) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, stock: p.stock + 20, status: 'instock' } : p)));
    toast.success(`Product #${id} stock adjusted via wc_update_product_stock()`);
  };

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">WooCommerce Storefront & Inventory MCP Manager</h2>
              <p className="text-xs text-muted-foreground">
                AI agents can inspect inventory, create coupon codes, update bulk pricing, and manage order fulfillment directly via PHP/REST hooks.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 text-xs font-mono font-semibold">
            MCP Tool: wc_manage_products
          </div>
        </div>

        {/* Search Input */}
        <div className="relative pt-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search WooCommerce products by SKU or title..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Product Table */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-foreground">LIVE WOOCOMMERCE INVENTORY ({filtered.length} PRODUCTS)</span>
          <span className="text-xs font-mono text-muted-foreground">PHP Hook: wc_get_products()</span>
        </div>

        <div className="divide-y divide-border">
          {filtered.map((p) => (
            <div key={p.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-muted text-muted-foreground">
                    SKU: {p.sku}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      p.status === 'instock'
                        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                        : p.status === 'lowstock'
                        ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                    }`}
                  >
                    {p.status === 'instock' ? `In Stock (${p.stock})` : p.status === 'lowstock' ? `Low Stock (${p.stock})` : 'Out of Stock'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-foreground">{p.name}</h4>
                <p className="text-xs text-muted-foreground">Category: {p.category}</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-foreground bg-muted/60 px-3 py-1.5 rounded-lg">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  <span>{p.price}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleRestock(p.id)}
                    className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    +20 Stock
                  </button>
                  <button
                    onClick={() => handleUpdatePrice(p.id, (parseFloat(p.price) - 10).toFixed(2))}
                    className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Apply $10 Sale
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
