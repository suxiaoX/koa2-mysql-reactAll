const router = require('koa-router')()
const blogCtrl = require('../controller/blogCtrl')

router
  .post('/blog/add', blogCtrl.addBlog)
  .post('/blog/check', blogCtrl.checkBlog)
  .post('/blog/del', blogCtrl.delBlog)

  module.exports = router.routes()