// VitePress theme configuration
// Complete styling and component system for 53-layer visualization

export const theme = {
  colors: {
    primary: '#00d4ff',      // Cyan
    secondary: '#ff006e',    // Red/Pink
    accent: '#8338ec',       // Purple
    success: '#06ffa5',      // Green
    warning: '#ffbe0b',      // Yellow
    danger: '#ff006e',       // Red
    dark: '#0a0e27',         // Dark navy
    darker: '#050812',       // Darkest
    light: '#f0f0f0'         // Light gray
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
    sm: '0 1px 2px 0 rgba(0, 212, 255, 0.05)',
    md: '0 4px 6px 0 rgba(0, 212, 255, 0.1)',
    lg: '0 10px 15px 0 rgba(0, 212, 255, 0.15)',
    xl: '0 20px 25px 0 rgba(0, 212, 255, 0.2)',
    glow: '0 0 20px rgba(0, 212, 255, 0.5)'
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

// CSS-in-JS helper
export function generateThemeCss(): string {
  return `
    :root {
      /* Colors */
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --accent: ${theme.colors.accent};
      --success: ${theme.colors.success};
      --warning: ${theme.colors.warning};
      --danger: ${theme.colors.danger};
      --dark: ${theme.colors.dark};
      --darker: ${theme.colors.darker};
      --light: ${theme.colors.light};

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

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
      color: var(--light);
      font-family: var(--font-family);
      font-size: var(--font-size-md);
      line-height: ${theme.typography.lineHeight.normal};
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

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent);
    }
  `
}

export default theme
