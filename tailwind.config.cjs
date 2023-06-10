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
            '100': '100px',
         },
         height: {
            '100': '100px',
         },
      },
   },
   plugins: [],
}
