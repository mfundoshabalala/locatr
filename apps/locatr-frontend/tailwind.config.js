const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  daisyui: {
    themes: ['corporate', 'cmyk']
  },
  theme: {
    extend: {
      backgroundImage: {
        'polygon': "url('/assets/images/polygon-bg-element.svg')",
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
};
