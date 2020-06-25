import path from 'path'

import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import { sharedConfig } from './shared'

const defaultEnv = {
  mode: 'development',
}

export const serverConfig = (env = defaultEnv) =>
  smart(sharedConfig(env), {
    name: 'server',
    entry: './src/server/entry.ts',
    output: {
      path: path.resolve(env.path, 'server/'),
      libraryTarget: 'commonjs2',
      filename: '[name].js',
      chunkFilename: '[id].js',
      pathinfo: false,
      hotUpdateMainFilename: 'hot-update.json',
      hotUpdateChunkFilename: '[id].hot-update.js',
    },
    target: 'node',
  } as Configuration)
