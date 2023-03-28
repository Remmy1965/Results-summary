/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        //PRIMARY COLORS
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',

        //GRADIENTS
        lightSlateBlue: 'hsl(252, 100%, 67%)', //Background
        lightRoyalBlue: 'hsl(241, 81%, 54%)', //Background
        violetBlue: 'hsla(256, 72%, 46%, 1)', //Circle
        persianBlue: 'hsla(241, 72%, 46%, 0)', //circle
        lightRedG: 'hsla(0, 97%, 85%, 0.989)',
        orangeYellowG: 'hsla(39, 92%, 85%, 0.973)',
        greenTealG: 'hsla(165, 17%, 86%, 0.998)',
        cobaltBlueG: 'hsla(240, 12%, 86%, 0.975)',
        violetBlueG: 'hsla(256, 45%, 49%, 0.981)',

        //NEUTRAL
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};
