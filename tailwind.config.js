/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens:{
                'mm': '0px',
                'smm': '400px'
            }
        }
    },
    plugins: []
};
