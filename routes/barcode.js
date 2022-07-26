const router = require('koa-router')();
const path = require('path');
const fs = require("fs");

router.get('/', async (ctx, next) => {
  ctx.body = { message: '失败', status: false }
})

router.get('/api/sto/types', async (ctx) => {
  const result = fs.readFileSync(path.join(__dirname, "..", 'templates') + '/sto-out-types.json')
  const data = JSON.parse(result.toString());
  ctx.body = data
})

router.get('/api/sto/out/list', async (ctx) => {
  const result = fs.readFileSync(path.join(__dirname, "..", 'templates') + '/sto-out-list.json')
  const data = JSON.parse(result.toString());
  ctx.body = data
})

router.get('/api/sto/out/item/list', async (ctx) => {
  const result = fs.readFileSync(path.join(__dirname, "..", 'templates') + '/sto-out-item-list.json')
  const data = JSON.parse(result.toString());
  ctx.body = data
})

module.exports = router