import React, { useState } from 'react';
import { OrderTrackingStudio } from './components/OrderTrackingStudio';
import { AnnouncementBannerStudio } from './components/AnnouncementBannerStudio';
import { ShippingRulesEngine } from './components/ShippingRulesEngine';
import { ThemeDesignStudio } from './components/ThemeDesignStudio';
import { SecurityHardeningStudio } from './components/SecurityHardeningStudio';
import { CptGeneratorStudio } from './components/CptGeneratorStudio';
import { AiAttributeExtractorDemo } from './components/AiAttributeExtractorDemo';
import { WsodSafeSandbox } from './components/WsodSafeSandbox';
import { HeadlessTypeGenerator } from './components/HeadlessTypeGenerator';
import { QueryOptimizer } from './components/QueryOptimizer';
import { AssetAuditor } from './components/AssetAuditor';
import { WebhookSimulator } from './components/WebhookSimulator';
import { SpecializationsMatrix } from './components/SpecializationsMatrix';
import { PersistentWpMemory } from './components/PersistentWpMemory';
import { McpConfigGuide } from './components/McpConfigGuide';
import {
  Globe,
  Truck,
  Palette,
  Package,
  Megaphone,
  Lock,
  FolderTree,
  ShoppingBag,
  Layers,
  Server,
  Github,
  Sun,
  Moon,
  Sparkles,
  Box,
  Brain,
  Shield,
  Code2,
  Database,
  Gauge,
  Send,
} from 'lucide-react';
import { Toaster } from 'sonner';

export function App() {
  const [activeTab, setActiveTab] = useState<
    | 'orders'
    | 'banners'
    | 'shipping'
    | 'theme-studio'
    | 'security'
    | 'cpt-studio'
    | 'wsod'
    | 'types'
    | 'query'
    | 'assets'
    | 'webhooks'
    | 'extractor'
    | 'specializations'
    | 'memory'
    | 'mcp'
  >('orders');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-200 ${darkMode ? 'dark' : ''}`}>
      <Toaster position="top-right" richColors />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm shadow-sm">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-foreground">
                Vibe WP
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-muted-foreground">
                v1.6.0 (Orders • Tracking • Banners • Shipping • Security)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shahrukh-hack/vibe-wp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Star on GitHub</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Hero */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Courier Tracking • Store Banners • Shipping Logic • Security Hardening</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
            Universal AI Agent MCP & <span className="italic font-normal text-primary">WordPress Runtime</span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Day-to-day operations and autonomous runtime for WordPress & WooCommerce. Dispatch courier tracking, deploy announcement notices, calculate regional shipping, and harden security.
          </p>
        </section>

        {/* Navigation Tabs Bar */}
        <div className="flex justify-center sticky top-20 z-40">
          <div className="inline-flex p-1.5 rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-sm gap-1 overflow-x-auto max-w-full">
            {[
              { id: 'orders', label: 'Courier Tracking', icon: <Package className="w-3.5 h-3.5 text-emerald-500" /> },
              { id: 'banners', label: 'Store Banners', icon: <Megaphone className="w-3.5 h-3.5 text-amber-500" /> },
              { id: 'shipping', label: 'Shipping Engine', icon: <Truck className="w-3.5 h-3.5 text-teal-500" /> },
              { id: 'theme-studio', label: 'Theme Studio', icon: <Palette className="w-3.5 h-3.5 text-indigo-500" /> },
              { id: 'security', label: 'Security Shield', icon: <Lock className="w-3.5 h-3.5 text-red-500" /> },
              { id: 'cpt-studio', label: 'CPT Scaffolder', icon: <FolderTree className="w-3.5 h-3.5 text-blue-500" /> },
              { id: 'wsod', label: 'WSOD Safe Guard', icon: <Shield className="w-3.5 h-3.5 text-emerald-600" /> },
              { id: 'types', label: 'Headless TS', icon: <Code2 className="w-3.5 h-3.5 text-sky-500" /> },
              { id: 'query', label: 'SQL Optimizer', icon: <Database className="w-3.5 h-3.5 text-amber-600" /> },
              { id: 'assets', label: 'Asset Auditor', icon: <Gauge className="w-3.5 h-3.5 text-purple-500" /> },
              { id: 'webhooks', label: 'Webhook Simulator', icon: <Send className="w-3.5 h-3.5 text-pink-500" /> },
              { id: 'extractor', label: 'AI Attribute Extractor', icon: <ShoppingBag className="w-3.5 h-3.5 text-rose-500" /> },
              { id: 'specializations', label: '38 Specializations', icon: <Box className="w-3.5 h-3.5 text-violet-500" /> },
              { id: 'memory', label: 'Persistent Memory', icon: <Brain className="w-3.5 h-3.5 text-amber-700" /> },
              { id: 'mcp', label: 'MCP Setup', icon: <Server className="w-3.5 h-3.5 text-slate-500" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Views */}
        <section className="pt-2">
          {activeTab === 'orders' && <OrderTrackingStudio />}
          {activeTab === 'banners' && <AnnouncementBannerStudio />}
          {activeTab === 'shipping' && <ShippingRulesEngine />}
          {activeTab === 'theme-studio' && <ThemeDesignStudio />}
          {activeTab === 'security' && <SecurityHardeningStudio />}
          {activeTab === 'cpt-studio' && <CptGeneratorStudio />}
          {activeTab === 'wsod' && <WsodSafeSandbox />}
          {activeTab === 'types' && <HeadlessTypeGenerator />}
          {activeTab === 'query' && <QueryOptimizer />}
          {activeTab === 'assets' && <AssetAuditor />}
          {activeTab === 'webhooks' && <WebhookSimulator />}
          {activeTab === 'extractor' && <AiAttributeExtractorDemo />}
          {activeTab === 'specializations' && <SpecializationsMatrix />}
          {activeTab === 'memory' && <PersistentWpMemory />}
          {activeTab === 'mcp' && <McpConfigGuide />}
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-border/80 text-center space-y-3">
          <p className="text-xs sm:text-sm font-mono text-muted-foreground">
            Created with intention by <a href="https://github.com/shahrukh-hack" className="text-primary font-bold hover:underline">Yogeshkumar Patel</a> • Adelaide, Australia 🇦🇺
          </p>
          <p className="text-[11px] text-muted-foreground">
            Universal Model Context Protocol (MCP) Server for WordPress & WooCommerce
          </p>
        </footer>
      </main>
    </div>
  );
}
