const mysql = require('./mysql')

const t_img =
  `create table if not exists t_img (
    id int(11) unsigned NOT NULL AUTO_INCREMENT,
    uid int(11) NOT NULL COMMENT 'uid',
    create_time datetime NOT NULL COMMENT '注册时间',
    update_time timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    name varchar(40) DEFAULT NULL,
    is_delete tinyint(1) DEFAULT '0',
    PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=0  DEFAULT CHARSET=utf8;`

mysql.createTable(t_img)
