const router = require('koa-router')()
const noteCtrl = require('../controller/noteCtrl')

router
  .post('/note/add', noteCtrl.addNote)
  .post('/note/check', noteCtrl.checkNote)

  module.exports = router.routes()
