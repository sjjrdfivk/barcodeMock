'use strict'

const development_env = require('./development');

// 配置不同环境
module.exports = {
  development: development_env,
}[process.env.NODE_ENV || 'development']