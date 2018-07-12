const router = require('koa-router')()
const userCtrl = require('../controller/userCtrl')
const checkLogin = require('../middlewares/checkLogin')

router
  .get('/info', checkLogin(), userCtrl.info) // 获取用户信息
  .post('/login', userCtrl.login)  // 用户登录
  .post('/register', userCtrl.register) // 用户注册
  .post('/logout', userCtrl.logout) // 用户登出
  .put('/put', userCtrl.put) // 更改用户资料
  .put('/resetpwd', userCtrl.resetpwd)  // 重置用户密码
  .delete('/deluser', userCtrl.deluser) // 删除用户

module.exports = router.routes()
