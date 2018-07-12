const mysql = require('./mysql')

const t_note =
  `create table if not exists t_note (
    id int(11) unsigned NOT NULL AUTO_INCREMENT,
    name varchar(20) DEFAULT NULL COMMENT '笔记本名',
    uid int(11) NOT NULL COMMENT 'uid',
    create_time datetime NOT NULL COMMENT '创建时间',
    update_time timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    is_delete tinyint(1) DEFAULT '0',
    PRIMARY KEY (id),
    UNIQUE KEY name (name) USING BTREE
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;`

mysql.createTable(t_note)
