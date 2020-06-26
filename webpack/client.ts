import path from 'path'

import { Configuration } from 'webpack'
import { smart } from 'webpack-merge'

import { WebpackEnvironment } from '../types/webpack'

import { sharedConfig } from './shared'

const defaultEnv = {
  mode: 'development' as const,
}

export const clientConfig = (env: WebpackEnvironment = defaultEnv) => {
  const IS_DEV = env.mode === 'development'

  return smart(sharedConfig(env), {} as Configuration)
}
