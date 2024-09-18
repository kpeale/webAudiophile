/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#D87D4A',
        'dark-black': '#101010',
        'gray-10': '#F1F1F1',
        'light-gray': '#FAFAFA',
        'dark-gray': '#979797',
        'light-orange': '#FBAF85',
        'white-10': '#FFFFFF',
        'black-10': '#000000',
        'black-20': '#0E0E0E',
      },
      lineHeight: {
        'regular-font': '19px',
        'regular-font': '58px',
        'medium-font': '25px',
      },
      letterSpacing: {
        'regular-font': '10px',
        'regular-mobile': '5px',
        'bold-font': '2px',
      },
      screens: {
        '2xl': { max: '2000px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '800px' },

        ksm: { max: '776px' },

        mobile: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        fsm: { max: '680px' },

        sm: { max: '639px' },

        gsm: { max: '618px' },

        ysm: { max: '586px' },
        // => @media (max-width: 639px) { ... }

        qsm: { max: '554px' },

        rsm: { max: '518px' },

        tsm: { max: '482px' },

        psm: { max: '458px' },

        csm: { max: '434px' },

        dsm: { max: '410px' },

        xsm: { max: '400px' },
        // => @media (max-width: 639px) { ... }

        bsm: { max: '358px' },

        nsm: { max: '338px' },

        hsm: { max: '318px' },

        lsm: { max: '300px' },
        // => @media (max-width: 639px) { ... }

        esm: { max: '200px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
