const router = require('koa-router')()
const imgCtrl = require('../controller/imgCtrl')

router
  .post('/img/add', imgCtrl.updateImg)
  .post('/img/update', imgCtrl.updateImg)
  .post('/img/remove', imgCtrl.removeImg)

  module.exports = router.routes()
