module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: '', //静态资源目录（js, css, img）
    lintOnSave: true, //是否开启eslint
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000', //API服务器的地址
                changeOrigin: true
            }
        }
    }
}
