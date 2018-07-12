
const userModel = require('../lib/user')

const userCtrl = {

  async info (ctx) {
    if (ctx.session.userInfo) {
      return ctx.body = {
        code: 0,
        msg: '获取用户信息成功',
        data: [ctx.session.userInfo]
      }
    } else {
      return ctx.body = {
        code: -1,
        msg: '未登录',
        data: []
      }
    }
  },

  async login(ctx, next) {
    const { username, password } = ctx.request.body
    const result = await userModel.findUser(username)
    console.log(result, 'login');
    if (!result.length) {
      return ctx.body = {
        code: -1,
        msg: '用户名或密码错误'
      }
    } else {
      const userInfo = result[0];
      if (userInfo.password === password) {
        ctx.session.userInfo = result[0];
        return ctx.body = {
          code: 0,
          msg: '登录成功',
          data: result
        }
      } else {
        return ctx.body = {
          code: -1,
          msg: '用户名或密码错误',
          data: []
        }
      }
    }
  },

  async register(ctx) {
    const { username, password, repeatpassword } = ctx.request.body
    const result = await userModel.findUser(username)
    if (password !== repeatpassword) {
      return ctx.body = {
        code: -1,
        msg: '密码不一致，无法注册'
      }
    }
    if (result.length === 0) {
      const res = await userModel.insertUser({ name: username, password: password, avator: 'test', create_time: '2018-07-12', update_time: '2018-07-12' })
      if (res.affectedRows === 1) {
        return ctx.body = {
          code: 0,
          msg: '注册成功'
        }
      } else {
        return ctx.body = {
          code: -2,
          msg: '服务器错误'
        }
      }
    } else {
      return ctx.body = {
        code: -3,
        msg: '用户已存在'
      }
    }
  },

  async logout(ctx) {
    ctx.session.userInfo = ''
    return ctx.body = {
      code: 0,
      msg: '退出成功'
    }
  },

  async put() {

  },

  async resetpwd() {

  },

  async deluser() {

  }
}

module.exports = userCtrl
