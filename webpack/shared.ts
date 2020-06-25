import webpack from 'webpack'

export const sharedConfig = (env) =>
  ({
    mode: env.mode || 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  } as webpack.Configuration)
