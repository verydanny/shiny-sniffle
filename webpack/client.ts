import webpack, { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import { WebpackEnvironment } from '../types/webpack'

import { sharedConfig } from './shared'

const defaultEnv = {
  mode: 'development' as const,
}

export const clientConfig = (env: WebpackEnvironment = defaultEnv) => {
  return smart(sharedConfig(env), {
    plugins: [new webpack.HashedModuleIdsPlugin()],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1]

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    },
  } as Configuration)
}
