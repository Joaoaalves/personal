import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#0a0a0a",
                surface: "#141414",
                fg: "#ecebe6",
                muted: "#8f8e89",
                faint: "#5a5955",
                line: "rgb(236 235 230 / 0.14)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
            },
            keyframes: {
                "scroll-cue": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(200%)" },
                },
            },
            animation: {
                "scroll-cue":
                    "scroll-cue 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
