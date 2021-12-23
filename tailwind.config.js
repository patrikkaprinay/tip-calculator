module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': 'Space Mono',
      },
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'dark-cyan': 'hsl(183, 100%, 15%)',
        'grayish-cyan-darkest': 'hsl(186, 14%, 43%)',
        'grayish-cyan-darker': 'hsl(184, 14%, 56%)',
        'grayish-cyan-middle': 'hsl(185, 41%, 84%)',
        'grayish-cyan-light': 'hsl(189, 41%, 97%)',
        'grayish-cyan-lightest': 'hsl(0, 0%, 100%)',
        white: '#fff',
      },
      letterSpacing: {
        'most-widest': '.25em',
      },
    },
  },
  plugins: [],
}
