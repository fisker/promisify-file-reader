module.exports = {
  plugins: [
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '0.8'
        },
        modules: false
      }
    ],
    'babel-preset-minify',
  ],
  moduleId: 'resolvify'
}
