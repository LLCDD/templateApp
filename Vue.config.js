module.exports = {
    // 基本路径
    baseUrl: './',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                // 线上
                //  target: 'http://www.zzjzj.net',
                // 本地
                target: 'http://192.168.0.148:8080',
                ws: true,
                changeOrigin: true
            }
        } // 设置代理
    }
}