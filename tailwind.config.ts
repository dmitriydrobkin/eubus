import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "on-background": "#e3e1ed",
        "surface-bright": "#383841",
        "inverse-on-surface": "#2f3038",
        "on-tertiary": "#512300",
        "error": "#ffb4ab",
        "on-secondary-fixed": "#1a1a26",
        "primary-fixed-dim": "#bbc3ff",
        "on-primary-fixed": "#000d60",
        "on-surface": "#e3e1ed",
        "tertiary-fixed": "#ffdbc8",
        "secondary": "#c7c5d5",
        "surface-container": "#1e1f27",
        "background": "#12131b",
        "surface-variant": "#34343d",
        "surface-tint": "#bbc3ff",
        "ivory-text": "#ededf3",
        "surface-container-low": "#1a1b23",
        "tertiary": "#ffb689",
        "tertiary-container": "#b95801",
        "on-secondary": "#2f2f3c",
        "primary-fixed": "#dfe0ff",
        "inverse-primary": "#3a4fd4",
        "outline": "#8f8fa0",
        "on-tertiary-container": "#fffaf9",
        "secondary-container": "#464553",
        "on-error": "#690005",
        "on-surface-variant": "#c5c5d7",
        "surface-container-highest": "#34343d",
        "primary-container": "#5266eb",
        "on-secondary-container": "#b5b3c3",
        "primary": "#bbc3ff",
        "surface-dim": "#12131b",
        "ash-text": "#c3c3cc",
        "on-primary-fixed-variant": "#1b33bc",
        "pure-white": "#ffffff",
        "onyx-canvas": "#171721",
        "surface-container-lowest": "#0d0e15",
        "on-error-container": "#ffdad6",
        "secondary-fixed": "#e3e0f1",
        "surface-container-high": "#292932",
        "inverse-surface": "#e3e1ed",
        "surface": "#12131b",
        "mist-border": "#e2e3ed",
        "on-primary": "#001b97",
        "slate-border": "#70707d",
        "obsidian-button": "#272735",
        "tertiary-fixed-dim": "#ffb689",
        "secondary-fixed-dim": "#c7c5d5",
        "on-tertiary-fixed-variant": "#743500",
        "outline-variant": "#454654",
        "error-container": "#93000a",
        "on-primary-container": "#fdfaff",
        "on-tertiary-fixed": "#321300",
        "on-secondary-fixed-variant": "#464553"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "card-padding": "32px",
        "unit": "4px",
        "section-gap": "72px",
        "element-gap": "12px",
        "container-max": "1200px"
      },
      fontFamily: {
        "headline-md": ["var(--font-sora)", ...fontFamily.sans],
        "caption": ["var(--font-inter)", ...fontFamily.sans],
        "display": ["var(--font-sora)", ...fontFamily.sans],
        "body-lg": ["var(--font-inter)", ...fontFamily.sans],
        "headline-sm": ["var(--font-sora)", ...fontFamily.sans],
        "body-sm": ["var(--font-inter)", ...fontFamily.sans],
        "subheading": ["var(--font-inter)", ...fontFamily.sans],
        "body": ["var(--font-inter)", ...fontFamily.sans],
        "headline-lg": ["var(--font-sora)", ...fontFamily.sans],
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.15", letterSpacing: "0.015em", fontWeight: "480" }],
        "caption": ["12px", { lineHeight: "1", letterSpacing: "0.01em", fontWeight: "480" }],
        "display": ["65px", { lineHeight: "1.1", letterSpacing: "0em", fontWeight: "530" }],
        "body-lg": ["18px", { lineHeight: "1.35", letterSpacing: "0em", fontWeight: "400" }],
        "headline-sm": ["28px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "480" }],
        "body-sm": ["14px", { lineHeight: "1", letterSpacing: "0.005em", fontWeight: "400" }],
        "subheading": ["21px", { lineHeight: "1.35", letterSpacing: "0em", fontWeight: "480" }],
        "body": ["16px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["42px", { lineHeight: "1.15", letterSpacing: "0.01em", fontWeight: "480" }]
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(17, 17, 17, 0.05)',
        'glass-hover': '0 8px 32px 0 rgba(255, 77, 77, 0.15)',
        'neon-coral': '0 0 20px 0 rgba(255, 77, 77, 0.5)',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blur-reveal": "blurReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurReveal: {
          "0%": { opacity: "0", filter: "blur(12px)", transform: "translateY(20px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    plugin(function({ addVariant }: any) {
      addVariant('group-hover', ['.group:hover &', '.group.mobile-hover-card[data-mobile-hover="true"] &']);
      addVariant('hover', ['&:hover', '&[data-mobile-hover="true"]']);
    }),
  ],
};

export default config;
