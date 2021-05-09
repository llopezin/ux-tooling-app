const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', 
    theme: {  
        extend: {
          colors:{
            transparent: 'transparent',
            primary: {
              light: '#ffc580',
              DEFAULT: '#fe9873'
            },
            secondary: '#c8a9a1',
            contrast: '#c9bab7',
            background: '#fcedeb',
            text: '#3f3f42',
            white: colors.white,
          }
        },  
        screens: {
          'sm': '640px',  
          'md': '768px', 
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },

        fontFamily: {
          'body': ['Exo 2', 'sans-serif'],
          'heading': ['monospace'],
         },
         
         gradientColorStops: theme => ({
          ...theme('colors'),
          'primary': '#fe9873',
          'primary-light': '#ffc580',
          'secondary': '#c8a9a1',
          'contrast': '#c9bab7',
          'backgorund': '#fdf8F7',
          'text': '#4a3d38',
         })

    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};