module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/small-touring-boat-sailing-night 1.png')",
      },
      width: {
        '800': '800px',
        '508': '508px',
        '114': '114px',
        '152': '152px',       
       },
       height: {
        
        '400': '400px',
        '499': '499px',
        '152': '152px',
        '227': '227px',

       },
       gap: {
        '220': '13.75rem',
      },
      fontSize: {
        '10': '0.625rem',
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin', 'tw-elements/dist/plugin')
  ],
}