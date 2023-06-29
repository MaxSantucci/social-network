/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            'sans': ['Fira Sans', 'sans-serif'],
            'mono': ['Roboto Mono', 'monospace'],
         },
         colors: {
            custom: "#29669c",
            black: "#000000",
            active: '#14213D'
         },
         width: {
            '80': '80px',
            '90': '90px',
            '100': '100px',
            '110': '110px',
            '120': '120px',
            '175': '175px',
            '300': '300px',
            '400': '400px',
            '500': '500px',
         },
         height: {
            '30': '30px',
            '40': '40px',
            '80': '80px',
            '90': '90px',
            '100': '100px',
            '110': '110px',
            '120': '120px',
         },
      },
   },
   plugins: [],
}
