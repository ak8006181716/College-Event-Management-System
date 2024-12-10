module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
      },
      backgroundImage: {
        'Main-Background': "url('/src/assets/images/main.jpg')",
      },
      maxWidth: {
        '8xl': '85rem',
      }
    },
  },
  plugins: [],
}