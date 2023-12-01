/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        rob: ['Roboto', 'sans-serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        bannerColo: '#FF7628',
        paraColo: '#6C7D93',
        sCardBgColor: '#EBF7E9',
        sCardHoverColor: '#FBF1EC',
        whoBgColor: '#FCF8F8',
        workBgColor: '#F0F5FB',
        processkBgColor: '#FEFEFE',
        blogBgColor: '#F2F7FD',
    },
    backgroundImage: {
      bannerBg: "url('../src/assets/bannerBg.png')",
    },
    },
  },
  plugins: [],
}

