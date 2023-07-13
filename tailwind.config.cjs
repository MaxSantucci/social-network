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
            active: '#14213D',
            button: "#DAE7F2",
            button_hover: "#CADFFF",
         },
         width: {
            '60': '60px',
            '80': '80px',
            '90': '90px',
            '100': '100px',
            '110': '110px',
            '120': '120px',
            '160': '160px',
            '175': '175px',
            '254': '254px',
            '300': '300px',
            '400': '400px',
            '500': '500px',
            '668': '668px',
            '700': '700px',
         },
         maxWidth: {
            '700': '700px',
         },
         height: {
            '30': '30px',
            '40': '40px',
            '60': '60px',
            '80': '80px',
            '90': '90px',
            '100': '100px',
            '110': '110px',
            '120': '120px',
            '130': '130px',
            '160': '160px',
         },
      },
   },
   plugins: [],
}
