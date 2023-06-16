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
         },
         height: {
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
