import { Configuration } from 'webpack'
import ExternalsPlugin from 'webpack-node-externals'
import { smart } from 'webpack-merge'

import { WebpackEnvironment } from '../types/webpack'

import { sharedConfig } from './shared'

const defaultEnv = {
  mode: 'development' as const,
}

export const serverConfig = (env: WebpackEnvironment = defaultEnv) =>
  smart(sharedConfig(env), {
    externals: [ExternalsPlugin()],
  } as Configuration)
