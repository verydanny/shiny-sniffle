module.exports = (api) => {
  const DEV = process.env.NODE_ENV === 'development'

  api.cache(false)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          loose: true,
          useBuiltIns: true,
        },
      ],
      [
        '@babel/plugin-proposal-optional-chaining',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        {
          loose: true,
        },
      ],
    ],
  }
}
