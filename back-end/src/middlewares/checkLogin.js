module.exports =  () => {
  return async (ctx, next) => {
    if (ctx.session.userInfo === '') {
      ctx.status = 401;
      return ctx.body = {
        code: -1,
        msg: '未登录'
      }
    }
    return await next()
  }
}