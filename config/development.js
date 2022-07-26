'use strict'

const path = require('path')

module.exports = {
  baseUrl: "http://172.16.100.196:3011", //baseUrl应用请求的url地址
  port: '3011', //server运行的端口
  secret: 'secret', // 密钥
  expiresIn: 60 * 60 * 48, // token过期时间(秒)
  publicDir: path.resolve(__dirname, '../public'),
  logPath: path.resolve(__dirname, '../logs/koa-template.log'),
}