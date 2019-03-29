module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '0.8',
        },
        exclude: ['transform-typeof-symbol', 'transform-regenerator'],
        useBuiltIns: false,
        modules: false,
        loose: true,
      },
    ],
  ],
  plugins: ['babel-plugin-transform-async-to-promises'],
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            // debug: true,
            exclude: [
              'transform-typeof-symbol',
              'transform-async-to-generator',
            ],
          },
        ],
      ],
    },
  },
}
