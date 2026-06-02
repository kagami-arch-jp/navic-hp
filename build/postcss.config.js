module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('postcss-nesting'),
    require("postcss-px-to-viewport")({
      unitToConvert: 'px',
      viewportWidth: 1000,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      include: 'src/**',
      exclude: /tailwind\.css$/,
    }),
    require("postcss-px-to-viewport")({
      unitToConvert: 'wpx',
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      include: 'src/**',
      exclude: /tailwind\.css$/,
    })
  ]
};
