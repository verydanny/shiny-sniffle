import * as path from 'path'

import { clientConfig } from './client'

const env = {
  mode: 'production' as const,
  target: 'client' as const,
  path: path.resolve(process.cwd(), 'dist'),
}

export default clientConfig(env)
