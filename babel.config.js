module.exports = (api) => {
  const ENV = api.env()
  const CLIENT_DEVELOPMENT = ENV === 'client_development'
  const SERVER_DEVELOPMENT = ENV === 'server_development'
  const SERVER_PRODUCTION = ENV === 'server_production'

  api.cache.using(() => SERVER_DEVELOPMENT || CLIENT_DEVELOPMENT)

  return {
    presets: [
      SERVER_DEVELOPMENT || SERVER_PRODUCTION
        ? [
            require.resolve('./babel/nodePreset'),
            {
              typescript: true,
              modules: false,
            },
          ]
        : [
            require.resolve('./babel/clientPreset'),
            {
              typescript: true,
              production: !CLIENT_DEVELOPMENT,
            },
          ],
      '@babel/preset-react',
    ],
  }
}
