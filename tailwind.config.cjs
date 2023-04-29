/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            custom: "#29669c",
            black: "#000000",
            active: '#14213D'
         },
         width: {

         }
      },
   },
   plugins: [],
}
