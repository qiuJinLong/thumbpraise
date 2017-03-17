<?php
// class zan extens opmysql{
//    function update(){
//    	this.mysql_query_arry("update  表名 set num = num +1")
//    }
// }
// $q = new zan();
// $q.update();


class opmysql {
	private $host = "localhost"; //服务期地址
	private $name = "root"; //登录帐号
	private $pwd = "root"; //密码
	private $database = "phplesson"; //数据库名称
	private $conn = ''; //数据库连接资源
	private $result;
	//应用构造函数初始化这个类
	function __construct($host = '', $name = '', $pwd = '', $database = '') {
		if ($host != '') {
			$this->host = $host;
		}
		if ($name != '') {
			$this->name = $name;
		}
		if ($pwd = '') {
			$this->pwd = $pwd;
		}
		if ($database = '') {
			$this->database = $database;
		}
	}
	//连接数据库
	function link_conn() {
		$this->conn = mysql_connect($this->host, $this->name, $this->pwd);
		mysql_select_db("PHPlesson", $this->conn);
		mysql_query("set names utf8");
	}
	//查询结果
	function mysql_query_arry($sql) {
		if ($this->conn == '') {
			$this->link_conn();
		}
		$result = mysql_query($sql);
		return $result;
	}
	
	//关闭数据库连接
	function close_conn() {
		$this->close_rst();
		mysql_close($this->conn);
		$this->conn = '';
	}
}

?>

