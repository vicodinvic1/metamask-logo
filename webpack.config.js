const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join, resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

const ENV = process.env.NODE_ENV || 'development'
const DEV = ENV === 'development'
const PROD = ENV === 'production'
const PUBLIC_PATH = process.env.PUBLIC_PATH || '/'

const ROOT_DIR = resolve(__dirname)
const SRC_DIR = join(ROOT_DIR, 'src')
const DIST_DIR = join(ROOT_DIR, 'dist')
const STATIC_DIR = join(SRC_DIR, 'static')
const NODE_MODULES_DIR = join(ROOT_DIR, 'node_modules')

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8000

async function createConfig (env, argv) {
  const config = {
    mode: ENV,
    context: SRC_DIR,
    entry: {
      app: SRC_DIR
    },
    output: {
      chunkFilename: '[id].[chunkhash].js',
      filename: '[name].[contenthash].js',
      hashDigestLength: 16,
      path: DIST_DIR,
      publicPath: PUBLIC_PATH
    },
    optimization: {
      moduleIds: 'named',
      runtimeChunk: {
        name: 'vendor'
      },
      splitChunks: {
        chunks: 'all',
        minSize: 1e5,
        name: false,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2048
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {}
            }
          ]
        },
        {
          test: /\.(woff|woff2|swf|ttf|eot|otf|mp4|ogv|webm)$/i,
          loader: 'file-loader'
        }
      ]
    },
    resolve: {
      alias: {
        cx: 'clsx',
        'react-dom': '@hot-loader/react-dom'
      },
      modules: [
        SRC_DIR,
        NODE_MODULES_DIR
      ],
      fallback: {
        path: require.resolve('path-browserify'),
        url: require.resolve('url'),
        fs: require.resolve('fs'),
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer')
      }
    },
    plugins: [
      new webpack.DefinePlugin(mapStageConfigToDefinePlugin({ PUBLIC_PATH })),

      new webpack.ProvidePlugin({
        process: 'process/browser.js',
        Buffer: ['buffer', 'Buffer']
      }),

      new HtmlWebpackPlugin({
        title: 'Boilerplate',
        template: join(SRC_DIR, 'index.ejs'),
        meta: [{
          name: 'robots', content: 'noindex,nofollow'
        }],
        minify: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          preserveLineBreaks: true,
          useShortDoctype: true,
          html5: true
        },
        mobile: true
      })
    ],
    stats: 'errors-only'
  }

  if (DEV) {
    config.devtool = 'inline-source-map'
    config.devServer = {
      static: {
        directory: STATIC_DIR
      },
      compress: true,
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY'
      },
      historyApiFallback: true,
      host: HOST,
      hot: true,
      client: {
        overlay: {
          warnings: false,
          errors: true
        }
      },
      port: PORT
    }

    config.plugins.push(
      new webpack.ProgressPlugin({ percentBy: 'entries' })
    )
  }

  if (PROD) {
    config.optimization.minimize = true
    config.optimization.minimizer = [
      new TerserPlugin()
    ]

    config.plugins.push(
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: STATIC_DIR,
            to: DIST_DIR
          }
        ]
      })
    )
  }

  return config
}

function mapStageConfigToDefinePlugin (config) {
  const definePluginObject = {}

  Object.keys(config).forEach(key => {
    definePluginObject[`process.env.${key}`] = JSON.stringify(config[key])
  })

  return definePluginObject
}

module.exports = createConfig
