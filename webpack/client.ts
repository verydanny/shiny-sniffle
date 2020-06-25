import path from 'path'

import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import { sharedConfig } from './shared'

const defaultEnv = {
  mode: 'development',
}

export const clientConfig = (env = defaultEnv) =>
  smart(sharedConfig(env), {
    name: 'client',
    entry: './src/client/entry.tsx',
    output: {
      path: path.resolve(env.path, 'client/'),
      publicPath: '/assets/',
      filename: '[name].js',
      chunkFilename: '[id].js',
      pathinfo: false,
      hotUpdateMainFilename: 'hot-update.json',
      hotUpdateChunkFilename: '[id].hot-update.js',
    },
    target: 'web',
  } as Configuration)
