const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        // app content
        `src/**/*.{js,ts,jsx,tsx}`,
        // include packages if not transpiling
        '../../packages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                noonYellow: {
                    100: '#FEFDCB',
                    200: '#FEFA98',
                    300: '#FEF765',
                    400: '#FEF33F',
                    500: '#FEEE00', // Use sparingly unless you want people to go blind!
                    600: '#DACB00',
                    700: '#B6A800',
                    800: '#938700',
                    900: '#796F00',
                },
                noonBlue: {
                    100: '#D7E6FD',
                    200: '#B0CBFB',
                    300: '#87ABF5',
                    400: '#678FEB',
                    500: '#3866DF', // Accent brand color, used for emphasis such as buttons & important links
                    600: '#284EBF',
                    700: '#1C39A0',
                    800: '#112781',
                    900: '#0A1A6B',
                },
                noonBlack: {
                    default: '#404553', // Default body color, can be used as dark background also

                    /* 
                    
                    100: '#EBEFF6',
                    200: '#D8DFED',
                    300: '#AFB8CB',
                    400: '#7D8597',
                    500: '#404553',
                    600: '#2E3447',
                    700: '#20253B',
                    800: '#141930',
                    900: '#0C1027', 
                    
                    */
                },
            },
        },
    },
    plugins: [],
};
