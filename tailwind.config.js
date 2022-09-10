/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            "darkBlue":"hsl(209, 23%, 22%)",
            "veryDarkBlue":"hsl(207, 26%, 17%)",
            "darkModeText" :"hsl(0, 0%, 100%)"
            
        },
        fontFamily:{
            'Nunito':['Nunito Sans', 'sans-serif']
        },

        extend: {},
    },
    plugins: [],
}