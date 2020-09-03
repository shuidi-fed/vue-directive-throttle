const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 修改output.publicPath
  publicPath: './',
  // 输出文件目录
  outputDir: process.argv.includes('lib') ? 'dist' : 'docs',
  configureWebpack: config => {
    // 设置入口文件
    config.entry.app = './example/main.js'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}