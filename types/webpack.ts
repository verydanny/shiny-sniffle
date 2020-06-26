import * as path from 'path'

export interface WebpackEnvironment {
  mode?: 'development' | 'production' | undefined
  path?: ReturnType<typeof path['resolve']>
  target?: 'client' | 'server' | undefined
}
