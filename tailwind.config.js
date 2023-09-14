/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14':'3.5rem',
        '125px':'125px'
      },
      colors: {
        'hoverbtn': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundImage:  theme => ({
        'spotify-theme':"url('../assets/img/bursts.svg')",
        'spotify-theme-mobile':"url('../assets/img/bursts-mobile.svg')",
      }),
      backgroundPosition: {
        'banner':'46% 4%',
        'banner-mobile':'top 25% center'
      },
      fontSize: {
        '9xl':'9rem'
      }
    },
  },
  plugins: [],
}

