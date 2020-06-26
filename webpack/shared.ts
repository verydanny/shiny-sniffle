import * as path from 'path'

import webpack from 'webpack'

import { WebpackEnvironment } from '../types/webpack'

export const sharedConfig = (env: WebpackEnvironment) => {
  const IS_DEV = env.mode === 'development'
  const mode = env.mode ? env.mode : 'production'
  const target = env.target ? env.target : 'client'

  return {
    name: env.target,
    mode: env.mode || 'development',
    entry: `./src/${target}/entry.tsx`,
    output: {
      path: env.path && path.resolve(env.path, `${target}/`),
      publicPath: target === 'client' ? '/assets/' : undefined,
      libraryTarget: target === 'client' ? undefined : 'commonjs2',
      filename: '[name].js',
      chunkFilename: '[id].js',
      pathinfo: !IS_DEV,
      hotUpdateMainFilename: 'hot-update.json',
      hotUpdateChunkFilename: '[id].hot-update.js',
    },
    target: target === 'client' ? 'web' : 'node',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            envName: `${target}_${mode}`,
          },
        },
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  } as webpack.Configuration
}
