const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const { corsHandler } = require('./middlewares/cors')
const { logger } = require('./utils/better-log4');


const barcode = require('./routes/barcode')

// error handler
onerror(app)

//跨域处理
app.use(cors(corsHandler))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
// app.use(require('koa-static')(__dirname + '/uploads'))
app.use(require('koa-static')(__dirname))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  ctx.status = 200
  await next()
  const ms = new Date() - start
  console.log(`[${start.toLocaleString()}]: ${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(barcode.routes(), barcode.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  if (err && err.code === 'ECONNRESET') {
    console.log('连接关闭:', err, ctx)
  } else {
    console.error('server error', err, ctx)
  }
  logger.error(err);
});

module.exports = app
