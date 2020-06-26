import path from 'path'

import express from 'express'
import { universalMiddleware } from 'webpack-universal-compiler'

import { clientConfig } from '../webpack/client'
import { serverConfig } from '../webpack/server'

const PORT = process.env.PORT || 3000
const app = express()

const BASE_ENV = {
  mode: 'development' as const,
  path: path.resolve(process.cwd(), 'dist'),
}

const CLIENT_ENV = {
  ...BASE_ENV,
  target: 'client' as const,
}

const SERVER_ENV = {
  ...BASE_ENV,
  target: 'server' as const,
}

const compilerMiddleware = universalMiddleware(
  clientConfig(CLIENT_ENV),
  serverConfig(SERVER_ENV),
  {
    hot: true,
    inMemoryFilesystem: true,
  },
)

app.use(compilerMiddleware)

app.use((req, res, next) => {
  if (res.locals.universal && res.locals.universal.bundle) {
    const { renderMiddleware } = res.locals.universal
      .bundle as typeof import('../src/server/entry')

    renderMiddleware(req, res, next)
  } else {
    next()
  }
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
)
