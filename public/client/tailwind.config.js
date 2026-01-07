/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                tertiary: "rgb(var(--tertiary) / <alpha-value>)",
                "black-100": "rgb(var(--black-100) / <alpha-value>)",
                "black-200": "rgb(var(--black-200) / <alpha-value>)",
                "white-100": "rgb(var(--white-100) / <alpha-value>)",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
}
