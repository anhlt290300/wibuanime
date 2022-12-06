/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '1024px',
      // => @media (min-width: 824px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      boxShadow: {
        'lightRounder': ' 0px 0px 5px 1px white;'        
      },
      keyframes: {
        menuBurgermoveRight: {
          from: {
            left: '-25rem'
          },
          to: {
            left: '0rem'
          }
        },
        menuBurgermoveleft: {
          from: {
            left: '0rem'
          },
          to: {
            left: '-25rem'
          }
        }
      },
      animation: {
        moveRight: 'menuBurgermoveRight 0.3s ease-in 1',
        moveLeft: 'menuBurgermoveleft 0.3s ease-in 1',
      }


    },
  },
  plugins: [],
}