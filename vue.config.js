// vue-cli 配置文件
module.exports = {
    devServer: {
        proxy: { //配置代理
            "/x": {
                target: "https://api.bilibili.com",
                onProxyReq(proxyReq){
                    proxyReq.setHeader("origin", "https://www.bilibili.com");
                    proxyReq.setHeader("referer", "https://www.bilibili.com/");
                }
            },
        },
    },
}