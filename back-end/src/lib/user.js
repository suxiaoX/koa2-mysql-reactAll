const mysql = require('./mysql')

const { query } = mysql

const t_user =
  `create table if not exists t_user (
    uid int(11) unsigned NOT NULL AUTO_INCREMENT,
    name varchar(25) DEFAULT NULL COMMENT '姓名',
    password varchar(50) NOT NULL COMMENT '密码',
    avator varchar(255) NOT NULL COMMENT '头像',
    create_time datetime NOT NULL COMMENT '注册时间',
    update_time timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    is_delete tinyint(1) DEFAULT '0',
    PRIMARY KEY (uid),
    UNIQUE KEY name (name) USING BTREE
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;`

mysql.createTable(t_user)

// 创建用户
const insertUser = (value) => {
  let _sql = "insert into t_user set ?"
  return query(_sql, value)
}

// 查找用户
const findUser = function (name) {
  let _sql = `select * from t_user where name='${name}';`
  return query(_sql)
}

module.exports = {
  insertUser,
  findUser
}
