const path = require('path')
const resolve = require('rollup-plugin-node-resolve') // 可以将第三方模块打包进项目里，这样即使不安装第三方模块也能使用
const commonjs = require('rollup-plugin-commonjs') // 可以将commonjs模块打包
const babel = require('rollup-plugin-babel') // 将es6语法转es5
const json = require('rollup-plugin-json') // 打包json文件
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss') // 支持css预处理

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/big.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/big.datav.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      name: 'bigDataV', // 模块名称
      format: 'umd', // 输出的模块协议
      globals: {
        'vue': 'vue',
        'crypto': 'crypto'
      }
    },
    {
      file: outputEsPath,
      name: 'bigDataV', // 模块名称P
      format: 'es' // 输出的es6模块协议
    }
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        ['@babel/transform-runtime', {
          regenerator: true
        }]
      ]
    }),
    json(),
    vue(),
    postcss({
      plugins: []
    })
  ],
  external: ['vue', 'echarts'] // 外部引用模块。即使有resolve插件也会被引入到外部
}