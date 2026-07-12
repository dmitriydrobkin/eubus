import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "onyx-canvas": "#171721",
        "graphite-card": "#1e1e2a",
        "primary-container": "#5266eb",
        "primary": "#5266eb",
        "primary-fixed": "#7b8dfa",
        "primary-fixed-dim": "#4054db",
        "inverse-primary": "#3a4fd4",
        "pure-white": "#ffffff",
        "ivory-text": "#ededf3",
        "ash-text": "#c3c3cc",
        "surface": "#171721",
        "surface-container": "#1e1e2a",
        "surface-container-low": "#1a1a23",
        "surface-variant": "#2f3038",
        "outline-variant": "#454654",
        "error": "#ffb4ab",
        "error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "12px",
        full: "9999px"
      },
      spacing: {
        "card-padding": "24px", // changed to 24px for tighter padding default, will override for desktop
        "unit": "4px",
        "section-gap": "48px", // changed default to 48px for mobile, will use md:py-24 for desktop
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
        "headline-md": ["32px", { lineHeight: "1.1", letterSpacing: "0.015em", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "1", letterSpacing: "0.01em", fontWeight: "400" }],
        "display": ["65px", { lineHeight: "1.1", letterSpacing: "0em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.35", letterSpacing: "0em", fontWeight: "400" }],
        "headline-sm": ["28px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "1.3", letterSpacing: "0.005em", fontWeight: "400" }],
        "subheading": ["21px", { lineHeight: "1.35", letterSpacing: "0em", fontWeight: "500" }],
        "body": ["16px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "headline-lg": ["42px", { lineHeight: "1.1", letterSpacing: "0.01em", fontWeight: "600" }]
      },
      boxShadow: {
        'glass': 'none',
        'glass-hover': 'none',
        'neon-coral': 'none',
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
