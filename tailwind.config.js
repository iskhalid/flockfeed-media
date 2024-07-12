/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      // fontWeight: {
      //   'extra-medium': '600',  // Add custom font weight
      // }
    },
  },
}