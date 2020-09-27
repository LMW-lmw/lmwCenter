module.exports={
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')({
          remUnit: 192
        })]
      }
    }
  },
  devServer: {
    port: 8080, // 端口号
    host: '127.0.0.1',
    open: true,
    proxy: { // 跨域配置
      '/api': { // 过滤的api
        target: 'http://www.ahjszgw.com/360xkw/tiku', // 要访问的URL
        changeOrigin: true, // true，启用跨域
        pathRewrite:{ // 要转发到的地址，根据需要也可不配置
          '^/api': ''
        }
      }
    }
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://www.360xkw.com/tiku',
  //         ws: true,
  //         changeOrigin: true,
  //         pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}