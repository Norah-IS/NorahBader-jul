/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: [
        {
            mytheme: {  
                "primary": ""
                
            },
        },
    ],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark"],
    },
}