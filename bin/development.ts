import path from 'path'

import express from 'express'
import { universalMiddleware } from 'webpack-universal-compiler'

import { clientConfig } from '../webpack/client'
import { serverConfig } from '../webpack/server'

const PORT = process.env.PORT || 3000
const app = express()

const ENV = {
  mode: 'development',
  path: path.resolve(process.cwd(), 'dist'),
}

const compilerMiddleware = universalMiddleware(
  clientConfig(ENV),
  serverConfig(ENV),
  {
    hot: true,
    inMemoryFilesystem: true,
  },
)

app.use(compilerMiddleware)

app.use((req, res, next) => {
  if (res.locals.universal && res.locals.universal.bundle) {
    // const bundle = res.locals.universal.bundle
    console.log('hit me')

    res.locals.universal.bundle.renderMiddleware(req, res, next)
  } else {
    next()
  }
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
)
