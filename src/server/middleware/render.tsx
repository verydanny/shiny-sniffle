import React from 'react'
import { Request, Response, NextFunction } from 'express'
import { renderToString } from 'react-dom/server'

import { App } from '../../app/app'

const fakeObj = {
  foo: {
    bar: 'hello',
  },
}

const test = fakeObj?.foo

export const renderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const theApp = renderToString(<App />)

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="app">${theApp}</div>
      <script src="/assets/main.js" type="application/javascript"></script>
    </body>
    </html>
  `)
}
