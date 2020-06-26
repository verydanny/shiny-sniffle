const basePlugins = require('./plugins')

module.exports = function nodePreset(_api, options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
    corejs = 3,
    debug = false,
    useBuiltIns = 'entry',
    typescript = false,
  } = options

  console.log(options)

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        targets: {
          node: version,
        },
        debug,
      },
    ],
  ]

  const plugins = [
    ...basePlugins(options),
    require.resolve('@babel/plugin-proposal-dynamic-import'),
    require.resolve('@babel/plugin-transform-modules-commonjs'),
  ]

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'))
  }

  return { presets, plugins }
}
