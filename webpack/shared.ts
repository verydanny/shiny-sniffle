import { Configuration } from 'webpack'

const defaultEnv = {
  mode: 'development'
}

export default (env = defaultEnv) => ({
  mode: env.mode || 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
}) as Configuration
