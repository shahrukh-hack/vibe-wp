import React, { useState } from 'react';
import { Palette, Sliders, Copy, Sparkles, Layers, Eye, Code2, Monitor, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

export const ThemeDesignStudio: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'gp' | 'kadence' | 'astra' | 'bricks' | 'fse'>('gp');
  const [minFontSize, setMinFontSize] = useState(32); // Mobile px for H1
  const [maxFontSize, setMaxFontSize] = useState(56); // Desktop px for H1
  const [primaryColor, setPrimaryColor] = useState('#2563EB');
  const [darkBg, setDarkBg] = useState('#0B0F19');

  // Fluid typography formula calculation:
  // viewport min: 360px, viewport max: 1440px
  const minRem = (minFontSize / 16).toFixed(3);
  const maxRem = (maxFontSize / 16).toFixed(3);
  const slope = ((maxFontSize - minFontSize) / (1440 - 360) * 100).toFixed(2);
  const intercept = ((minFontSize - ((maxFontSize - minFontSize) / (1440 - 360)) * 360) / 16).toFixed(3);
  const fluidH1Clamp = `clamp(${minRem}rem, ${slope}vw + ${intercept}rem, ${maxRem}rem)`;

  // Generate Theme-Specific Token Code
  const getThemeCode = () => {
    switch (activeTheme) {
      case 'gp':
        return `/* GeneratePress Fluid Typography & Color Palette */
:root {
  --gp-primary: ${primaryColor};
  --gp-dark-bg: ${darkBg};
  --gp-h1-size: ${fluidH1Clamp};
  --gp-h2-size: clamp(1.5rem, 1.8vw + 1rem, 2.75rem);
  --gp-body-size: clamp(1rem, 0.25vw + 0.95rem, 1.125rem);
}

h1.entry-title, .hero-heading {
  font-size: var(--gp-h1-size) !important;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--gp-primary);
}

/* Customizer Token Override */
add_filter('generate_typography_default_fonts', function($fonts) {
    $fonts[] = 'Inter';
    return $fonts;
});`;

      case 'kadence':
        return `/* Kadence Theme Global Palette & Fluid Typography */
:root {
  --global-palette1: ${primaryColor}; /* Primary Accent */
  --global-palette2: ${darkBg};        /* Dark Neutral */
  --global-palette3: #1E293B;        /* Contrast */
  --global-palette7: #F8FAFC;        /* Light Background */
  --global-palette9: #FFFFFF;        /* Clean White */
  --global-h1-font-size: ${fluidH1Clamp};
}

.entry-header h1 {
  font-size: var(--global-h1-font-size);
  letter-spacing: -0.03em;
}`;

      case 'astra':
        return `/* Astra Global Color Palette & Fluid Scale */
:root {
  --ast-global-color-0: ${primaryColor};
  --ast-global-color-1: ${darkBg};
  --ast-global-color-2: #334155;
  --ast-h1-font-size: ${fluidH1Clamp};
}

.ast-single-post .entry-title {
  font-size: var(--ast-h1-font-size);
}`;

      case 'bricks':
        return `/* Bricks Builder Global Variables & Container Grid */
:root {
  --bricks-color-primary: ${primaryColor};
  --bricks-color-dark: ${darkBg};
  --bricks-heading-h1: ${fluidH1Clamp};
  --bricks-container-width: 1280px;
  --bricks-gap-fluid: clamp(1rem, 2vw + 0.5rem, 2.5rem);
}

.brx-container {
  max-width: var(--bricks-container-width);
  gap: var(--bricks-gap-fluid);
}`;

      case 'fse':
      default:
        return `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "typography": {
      "fluid": true,
      "fontSizes": [
        {
          "slug": "h1-hero",
          "size": "${maxRem}rem",
          "fluid": {
            "min": "${minRem}rem",
            "max": "${maxRem}rem"
          },
          "name": "Hero H1 Fluid"
        }
      ]
    },
    "color": {
      "palette": [
        { "slug": "primary", "color": "${primaryColor}", "name": "Primary Brand" },
        { "slug": "dark-surface", "color": "${darkBg}", "name": "Dark Surface" }
      ]
    }
  }
}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getThemeCode());
    toast.success(`Copied design tokens for ${activeTheme.toUpperCase()}!`);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">Theme Design Studio & Fluid Typography Engine</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 uppercase">
                  theme.json (v3) & CSS Clamp
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Mathematically computes fluid typography scales (`clamp()`) and exports design tokens for GeneratePress, Kadence, Astra, Bricks & Block Themes.
              </p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Design Tokens</span>
          </button>
        </div>

        {/* Theme Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2">
          {[
            { id: 'gp', label: 'GeneratePress' },
            { id: 'kadence', label: 'Kadence Theme' },
            { id: 'astra', label: 'Astra Theme' },
            { id: 'bricks', label: 'Bricks Builder' },
            { id: 'fse', label: 'FSE theme.json (v3)' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTheme(t.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTheme === t.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Design Controls */}
        <div className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2 border-b border-border pb-3">
            <Sliders className="w-4 h-4 text-primary" />
            <span>Fluid Typography & Palette Controls</span>
          </h3>

          {/* Min Font Size (Mobile) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Mobile H1 Font Size (360px viewport):</span>
              </span>
              <span className="font-mono font-bold text-primary">{minFontSize}px ({minRem}rem)</span>
            </div>
            <input
              type="range"
              min="24"
              max="48"
              value={minFontSize}
              onChange={(e) => setMinFontSize(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Max Font Size (Desktop) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Desktop H1 Font Size (1440px viewport):</span>
              </span>
              <span className="font-mono font-bold text-primary">{maxFontSize}px ({maxRem}rem)</span>
            </div>
            <input
              type="range"
              min="40"
              max="80"
              value={maxFontSize}
              onChange={(e) => setMaxFontSize(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Computed Clamp Badge */}
          <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
            <div className="text-[11px] font-mono font-bold text-primary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Computed CSS Clamp Formula:</span>
            </div>
            <div className="font-mono text-xs text-foreground select-all">{fluidH1Clamp}</div>
          </div>

          {/* Color Palette Pickers */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Primary Accent Color:</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-8 h-8 rounded-lg border border-border cursor-pointer"
                />
                <span className="font-mono text-xs text-muted-foreground">{primaryColor}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Dark Surface Color:</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={darkBg}
                  onChange={(e) => setDarkBg(e.target.value)}
                  className="w-8 h-8 rounded-lg border border-border cursor-pointer"
                />
                <span className="font-mono text-xs text-muted-foreground">{darkBg}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Generated Token Output */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">Generated {activeTheme.toUpperCase()} Tokens</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1 shadow-sm"
            >
              <Copy className="w-3 h-3" />
              <span>Copy Code</span>
            </button>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto max-h-[380px]">
            <pre className="leading-relaxed text-indigo-600 dark:text-indigo-400">{getThemeCode()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
