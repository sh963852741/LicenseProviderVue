module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: '', //静态资源目录（js, css, img）
    lintOnSave: true, //是否开启eslint
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.112.154.147:3029', //API服务器的地址
                changeOrigin: true
            }
        }
    }
}
