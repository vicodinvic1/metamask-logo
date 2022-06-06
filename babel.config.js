const presets = [
  ['@babel/preset-env', {
    modules: false
  }],
  '@babel/preset-react'
]

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-syntax-dynamic-import',
  'universal-import'
]

if (process.env['NODE_ENV' !== 'production']) {
  plugins.push('react-hot-loader/babel')
}

module.exports = {
  presets,
  plugins
}
