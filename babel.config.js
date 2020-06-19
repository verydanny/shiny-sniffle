module.exports = (api) => {
  const DEV = process.env.NODE_ENV === 'development'

  api.cache.using(() => DEV)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', {
        loose: true
      }],
      ['@babel/plugin-proposal-object-rest-spread', {
        loose: true,
        useBuiltIns: true
      }],
      ['@babel/plugin-proposal-optional-chaining', {
        loose: true
      }],
      ['@babel/plugin-proposal-nullish-coalescing-operator', {
        loose: true
      }]
    ]
  }
}
