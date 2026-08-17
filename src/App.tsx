import React, { useState } from 'react';
import { PhpRunnerSandbox } from './components/PhpRunnerSandbox';
import { WooCommerceManager } from './components/WooCommerceManager';
import { GutenbergScaffolder } from './components/GutenbergScaffolder';
import { PluginHookExplorer } from './components/PluginHookExplorer';
import { McpConfigGuide } from './components/McpConfigGuide';
import {
  Globe,
  Terminal,
  ShoppingBag,
  Layers,
  Zap,
  Server,
  Github,
  Sun,
  Moon,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Toaster } from 'sonner';

export function App() {
  const [activeTab, setActiveTab] = useState<'php' | 'woo' | 'gutenberg' | 'hooks' | 'mcp'>('php');
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
                v1.0.0 (MCP WordPress & WooCommerce Engine)
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
            <span>Direct PHP Execution • WooCommerce API • Gutenberg Blocks • MCP Standard</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
            Universal AI Agent MCP for <span className="italic font-normal text-primary">WordPress & WooCommerce</span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Connect AI coding agents (<strong>Antigravity</strong>, <strong>Cursor</strong>, <strong>Claude Code</strong>) directly to your WordPress backend. Execute PHP within the WordPress lifecycle, manage WooCommerce inventory, and scaffold Gutenberg blocks without API bottlenecks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-muted-foreground">
            <span className="px-2 py-1 rounded bg-muted">PHP Runtime</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">WooCommerce</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">ACF Pro</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">Gutenberg React</span>
            <span>•</span>
            <span className="px-2 py-1 rounded bg-muted">Antigravity & Cursor</span>
          </div>
        </section>

        {/* Navigation Tabs Bar */}
        <div className="flex justify-center sticky top-20 z-40">
          <div className="inline-flex p-1.5 rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-sm gap-1 overflow-x-auto max-w-full">
            {[
              { id: 'php', label: 'PHP Runtime Sandbox', icon: <Terminal className="w-3.5 h-3.5 text-blue-500" /> },
              { id: 'woo', label: 'WooCommerce Manager', icon: <ShoppingBag className="w-3.5 h-3.5 text-purple-500" /> },
              { id: 'gutenberg', label: 'Gutenberg Scaffolder', icon: <Layers className="w-3.5 h-3.5 text-emerald-500" /> },
              { id: 'hooks', label: 'Hook & Filter Explorer', icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
              { id: 'mcp', label: 'MCP Setup Guide', icon: <Server className="w-3.5 h-3.5 text-slate-500" /> },
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
          {activeTab === 'php' && <PhpRunnerSandbox />}
          {activeTab === 'woo' && <WooCommerceManager />}
          {activeTab === 'gutenberg' && <GutenbergScaffolder />}
          {activeTab === 'hooks' && <PluginHookExplorer />}
          {activeTab === 'mcp' && <McpConfigGuide />}
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-border/80 text-center space-y-3">
          <p className="text-xs sm:text-sm font-mono text-muted-foreground">
            Created with intention by <a href="https://github.com/shahrukh-hack" className="text-primary font-bold hover:underline">Yogeshkumar Patel</a> • Adelaide, Australia 🇦🇺
          </p>
          <p className="text-[11px] text-muted-foreground">
            Open Source under MIT License • Inspired by Novamira & the WordPress Open Source Community
          </p>
        </footer>
      </main>
    </div>
  );
}
