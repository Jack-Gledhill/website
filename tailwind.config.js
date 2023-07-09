/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',

            blue: {
                DEFAULT: '#1f6bcb',
                100: '#d2e1f5',
                200: '#a5c4ea',
                300: '#79a6e0',
                400: '#4c89d5',
                600: '#1956a2',
                700: '#13407a',
                800: '#0c2b51',
                900: '#061529'
            },
            grey: {
                DEFAULT: '#a1a1aa',
                200: '#f4f4f5',
                300: '#e4e4e7',
                400: '#d4d4d8',
                600: '#71717a',
                700: '#52525b'
            },
            decor: {
                blue: '#4faff0'
            }
        },
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'hero-shapes': "url('/hero-shapes.svg'), linear-gradient(135deg, #4faff0, #1f6bcb)",
                'hero-about': "url('/hero-about.jpg')",
                'hero-contracts': "url('/hero-contracts.jpg')",
                'hero-pricing': "url('/hero-pricing.jpg')",
                'faq-gradient': "linear-gradient(135deg, #1f6bcb, #13407a)"
            },
        },
    },
    plugins: [],
}
