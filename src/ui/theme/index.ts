// VitePress theme: σ-involution wired through harmonic layer
// Theme ← Audio ← Vibration ← Gate thresholds (all derived from involution)
import harmonic from '../harmonic'

// Light mode palette derived from harmonic foundation
const paletteLight = {
  primary:   `oklch(65% 0.2 ${harmonic.harmonicPalette.primary.hue})`,
  secondary: `oklch(55% 0.22 ${harmonic.harmonicPalette.secondary.hue})`,
  accent:    `oklch(60% 0.19 ${harmonic.harmonicPalette.accent.hue})`,
  success:   'var(--color-semantic-success, oklch(72% 0.18 150))',  // Green (harmonic H for success)
  warning:   'var(--color-semantic-warning, oklch(70% 0.20 85))',   // Yellow (harmonic H for warning)
  danger:    'var(--color-semantic-danger, oklch(58% 0.21 20))',   // Red (harmonic H for danger)
  neutral:   'var(--color-semantic-neutral, oklch(85% 0.05 0))',    // Light gray
}

// Dark mode: σ-inverted + harmonic ratios for perception
const paletteDark = {
  primary:   `oklch(35% 0.2 ${(harmonic.harmonicPalette.primary.hue + 180) % 360})`,
  secondary: `oklch(45% 0.22 ${(harmonic.harmonicPalette.secondary.hue + 180) % 360})`,
  accent:    `oklch(40% 0.19 ${(harmonic.harmonicPalette.accent.hue + 180) % 360})`,
  success:   'var(--color-semantic-success-dark, oklch(28% 0.18 330))',
  warning:   'var(--color-semantic-warning-dark, oklch(30% 0.20 265))',
  danger:    'var(--color-semantic-danger-dark, oklch(42% 0.21 200))',
  neutral:   'var(--color-semantic-neutral-dark, oklch(15% 0.05 0))',
}

// Vibration timing derives from harmonic periods
const vibrationTiming = {
  primary: harmonic.vibrationTiming(harmonic.harmonicPalette.primary.frequencyHz),
  secondary: harmonic.vibrationTiming(harmonic.harmonicPalette.secondary.frequencyHz),
  accent: harmonic.vibrationTiming(harmonic.harmonicPalette.accent.frequencyHz),
}

export const theme = {
  colors: {
    // Use CSS custom properties to toggle σ-state dynamically
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
    neutral: 'var(--color-neutral)',
    // Derived from σ-pairs
    dark: 'var(--color-neutral-inverted)',
    darker: 'var(--color-neutral-darker, oklch(5% 0.02 0))',
    light: 'var(--color-neutral)',
  },

  // Typography
  typography: {
    fontFamily: "'Courier New', monospace",
    fontSize: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px'
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      extraBold: 900
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8
    }
  },

  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px'
  },

  // Breakpoints
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultrawide: '1536px'
  },

  // Borders
  borders: {
    radius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px'
    },
    width: {
      thin: '1px',
      normal: '2px',
      thick: '3px'
    }
  },

  // Shadows
  shadows: {
    sm: 'var(--shadow-sm, 0 1px 2px 0 rgba(0, 212, 255, 0.05))',
    md: 'var(--shadow-md, 0 4px 6px 0 rgba(0, 212, 255, 0.1))',
    lg: 'var(--shadow-lg, 0 10px 15px 0 rgba(0, 212, 255, 0.15))',
    xl: 'var(--shadow-xl, 0 20px 25px 0 rgba(0, 212, 255, 0.2))',
    glow: 'var(--shadow-glow, 0 0 20px rgba(0, 212, 255, 0.5))'
  },

  // Animations
  animations: {
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    spin: 'spin 1s linear infinite',
    bounce: 'bounce 1s infinite',
    fadeIn: 'fadeIn 0.3s ease-in',
    slideUp: 'slideUp 0.3s ease-out'
  },

  // Transitions
  transitions: {
    default: 'all 0.2s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.1s ease'
  }
}

// CSS-in-JS: σ-involution theme with light/dark duality
export function generateThemeCss(): string {
  return `
    :root {
      /* Light mode (default) — primary state */
      --color-primary: ${paletteLight.primary};
      --color-secondary: ${paletteLight.secondary};
      --color-accent: ${paletteLight.accent};
      --color-success: ${paletteLight.success};
      --color-warning: ${paletteLight.warning};
      --color-danger: ${paletteLight.danger};
      --color-neutral: ${paletteLight.neutral};
      --color-neutral-inverted: var(--color-neutral-inverted, oklch(15% 0.05 0));

      /* Typography */
      --font-family: ${theme.typography.fontFamily};
      --font-size-xs: ${theme.typography.fontSize.xs};
      --font-size-sm: ${theme.typography.fontSize.sm};
      --font-size-md: ${theme.typography.fontSize.md};
      --font-size-lg: ${theme.typography.fontSize.lg};

      /* Spacing */
      --spacing-xs: ${theme.spacing.xs};
      --spacing-sm: ${theme.spacing.sm};
      --spacing-md: ${theme.spacing.md};
      --spacing-lg: ${theme.spacing.lg};

      /* Borders */
      --radius-sm: ${theme.borders.radius.sm};
      --radius-md: ${theme.borders.radius.md};
      --border-width: ${theme.borders.width.normal};

      /* Shadows */
      --shadow-md: ${theme.shadows.md};
      --shadow-glow: ${theme.shadows.glow};

      /* Transitions */
      --transition: ${theme.transitions.default};
    }

    /* Dark mode: σ-involution applied (inverted lightness + rotated hue) */
    :root[data-theme="dark"],
    @media (prefers-color-scheme: dark) {
      --color-primary: ${paletteDark.primary};
      --color-secondary: ${paletteDark.secondary};
      --color-accent: ${paletteDark.accent};
      --color-success: ${paletteDark.success};
      --color-warning: ${paletteDark.warning};
      --color-danger: ${paletteDark.danger};
      --color-neutral: ${paletteDark.neutral};
      --color-neutral-inverted: var(--color-neutral-inverted, oklch(85% 0.05 0));
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(135deg, var(--color-neutral-inverted) 0%, var(--color-neutral) 100%);
      color: var(--color-neutral);
      font-family: var(--font-family);
      font-size: var(--font-size-md);
      line-height: ${theme.typography.lineHeight.normal};
      transition: background 0.3s ease, color 0.3s ease;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Scrollbar: σ-aware styling */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background: var(--color-neutral-inverted);
      opacity: 0.1;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-accent);
    }
  `
}

export default theme
