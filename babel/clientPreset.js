const basePlugins = require('./plugins')

module.exports = function clientPreset(_api, options = {}) {
  const {
    modules = false,
    corejs = 2,
    shippedProposals = true,
    debug = false,
    useBuiltIns = 'usage',
    typescript = false,
    production = false,
    loose = true,
  } = options

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        loose,
        modules,
        shippedProposals,
        useBuiltIns,
        corejs,
        targets: {
          browsers: production
            ? '>1%, not dead, not ie 11, not op_mini all'
            : 'last 2 Chrome versions',
        },
        debug,
      },
    ],
  ]

  const plugins = [...basePlugins(options)]

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'))
  }

  return { presets, plugins }
}
