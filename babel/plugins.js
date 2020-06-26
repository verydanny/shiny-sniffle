module.exports = function plugins(options = {}) {
  const { inlineEnv = false, typescript = false, production = false } = options

  const plugs = [require.resolve('@babel/plugin-syntax-dynamic-import')]

  if (inlineEnv) {
    require.resolve('babel-plugin-transform-inline-environment-variables')
  }

  if (typescript) {
    plugs.push(
      require.resolve('@babel/plugin-syntax-nullish-coalescing-operator'),
      require.resolve('@babel/plugin-syntax-optional-chaining'),
      [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
      [
        require.resolve('@babel/plugin-proposal-class-properties'),
        { loose: true },
      ],
      require.resolve('@babel/plugin-proposal-numeric-separator'),
      [
        require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
        { loose: true },
      ],
      [
        require.resolve('@babel/plugin-proposal-optional-chaining'),
        { loose: true },
      ],
    )
  } else {
    plugs.push([
      require.resolve('@babel/plugin-proposal-class-properties'),
      {
        loose: true,
      },
    ])
  }

  if (production) {
    plugs.push([
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
        useESModules: true,
      },
    ])
  }

  return plugs
}
