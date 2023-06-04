module.exports = {
    content: ['./pages/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
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
                red: {
                    DEFAULT: '#f56565',
                },
                orange: {
                    DEFAULT: '#ff9355',
                },
                yellow: {
                    DEFAULT: '#ffd155',
                },
                lime: {
                    DEFAULT: '#c6eb6c',
                },
                green: {
                    DEFAULT: '#48bb78',
                },
                blue: {
                    DEFAULT: '#4faff0',
                },
                violet: {
                    DEFAULT: '#ff70e7',
                }
            }
        },

        container: {
            center: true,
        },
    },
    plugins: [],
}
