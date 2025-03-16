import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    darkMode: ["class"],
    safelist: [
        "max-h-40 scale-[.7] data-[active=true]:scale-[.3] data-[active=true]:max-h-60 invert max-w-[80%]", // Project Logo
        "text-neutral-400 font-medium text-start md:grid-cols-3", // Skills
        "bg-gradient-to-br bg-gradient-to-b from-secondary from-black to-neutral-900 to-slate-600 from-50% from-secondary/0 to-secondary to-purple-800 min-h-96 from-[#cc0a54] from-[#00ADFC] from-[#00FF7B] from-[#f72585] from-[#FC440F] to-[#B8810D] to-[#4cc9f0] to-[#0496ff] to-[#04E762] to-[#D93002]",
        "!bg-[#FC440F] !bg-[#f72585] !bg-[#cc0a54] !bg-[#00ADFC] !bg-[#00FF7B] text-neutral-800 border-neutral-600 w-full grid grid-cols-3 rotate-90 scale-[1.4]",
    ],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                shimmer: "shimmer 5s linear infinite",
                aurora: "aurora 60s linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "inner-glow": "innerGlow 2s ease-out infinite",
            },
            keyframes: {
                innerGlow: {
                    "0%": { boxShadow: "inset 0 0px 1px #0ea5e905" },
                    "50%": { boxShadow: "inset 0 0px 5px #0ea5e920" },
                    "100%": { boxShadow: "inset 0 0px 1px #0ea5e905" },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            colors: {
                primary: "#00FF7B",
                secondary: "#00ADFC",
                tertiary: "#a855f7",
                background: "#010303",
                foreground: "var(--foreground)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backgroundImage: {
                "footer-gradient-purple":
                    "linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 60%, rgba(30,18,74,0.5) 80%, rgba(58,29,162,0.6) 100%)",
                "footer-gradient-pink":
                    "linear-gradient(200deg, rgba(0,0,0,0) 75%, rgba(201,19,183,0.2) 100%)",
            },
            fontFamily: {
                primary: ["var(--font-primary)"],
                name: ["var(--font-name)"],
            },
            webKitTextStrokeWidth: {
                1: "4px",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        addVariablesForColors,
        addCustomBackgrounds,
        radialGradients,
        textStroke,
    ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}

function addCustomBackgrounds({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            "bg-grid": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
            }),
            "bg-grid-small": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
                )}")`,
            }),
            "bg-dot": (value: any) => ({
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
                )}")`,
            }),
        },
        {
            values: flattenColorPalette(theme("backgroundColor")),
            type: "color",
        },
    );
}

function radialGradients({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            "bg-radial": (value: any) => ({
                "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
            }),
        },
        { values: theme("radialGradients") },
    );
}

function textStroke({ matchUtilities, theme }: any) {
    matchUtilities(
        {
            "text-stroke": (value: any) => ({
                WebkitTextStrokeColor: value,
                WebkitTextStrokeWidth: "1px",
            }),
        },
        { values: theme("textStroke") },
    );
}
