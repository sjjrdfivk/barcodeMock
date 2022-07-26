'use strict'

const corsHandler = {
    origin: function (ctx) {
        if (ctx.url === '/test') {
            // 这里可以配置不运行跨域的接口地址
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization',],
    maxAge: 300,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Content-Length', 'Authorization', 'Accept', 'X-Requested-With', 'yourHeaderFeild', 'token'],
}

module.exports = {
    corsHandler
}