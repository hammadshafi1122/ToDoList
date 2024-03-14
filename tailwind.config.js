/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
      ,
      width: {
        '128': '32rem',
        '150': '85.4rem'
        ,
      },
      padding:
      {
        '128' : '50rem'
      },
      margin:
      {
        '128' : '125rem'
      }
      ,colors: {
        'main': '#763626',
        'blue': '#90AFC5',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#2A3132',
        'button': '#6E6ED8'
      }
      
    },
  },
}

