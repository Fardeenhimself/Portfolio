/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  
        moonDance: ['Moon Dance', 'cursive'],  
      },
      fontWeight: {
        light: 300,  
        regular: 400, 
        semi: 600,  
        bold: 700,
      },
    },
  },
  plugins: [],
};