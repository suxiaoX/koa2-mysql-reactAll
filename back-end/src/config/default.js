const config = {
  port: 3333,

  // 数据库配置
  database: {
    DATABASE: 'koa_demo',
    USERNAME: 'root',
    PASSWORD: '123456',
    PORT: 3306,
    HOST: '127.0.0.1',
    multipleStatements: true //允许多条sql同时执行
  }
}

module.exports = config