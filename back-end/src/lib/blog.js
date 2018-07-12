const mysql = require('./mysql')

const t_blog =
  `create table if not exists t_blog (
    id int(11) unsigned NOT NULL AUTO_INCREMENT,
    title varchar(200) DEFAULT NULL COMMENT '标题',
    uid int(11) DEFAULT '1' COMMENT 'uid',
    content text COMMENT '内容',
    create_time datetime NOT NULL COMMENT '注册时间',
    update_time timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    note_id varchar(45) DEFAULT NULL,
    publish tinyint(4) DEFAULT '0' COMMENT '是否发布',
    brief text,
    is_delete tinyint(1) DEFAULT '0' COMMENT '是否删除',
    ext_info text,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;`

mysql.createTable(t_blog)
