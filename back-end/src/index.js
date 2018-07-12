const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
// const MysqlSession2 = require('koa2-mysql-session')
const MysqlSession = require('koa-mysql-session')

const config = require('./config/default.js')
const router = require('./routers')

const app = new Koa()

// session存储配置
let mysqlSessionStore = new MysqlSession({
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
})

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: mysqlSessionStore
}))

app.use(bodyParser())

app.use(router.routes())
.use(router.allowedMethods());

app.listen(config.port, (err) => {
  if (err) throw Error(err)
  console.log(`listening on port ${config.port}`)
})
