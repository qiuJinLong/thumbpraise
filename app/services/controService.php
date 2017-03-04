<?php
	include '../pojos/PraisePojo.php';
	include '../dba/PraiseDba.php';
	$dboperate = new opmysql();

	//获取到前端传递过来的用户id，和次数
	//其实不用次数也行，可以简单的做下对照，但是次数主要还是以数据库为准
	$data=file_get_contents("php://input"); //取得json数据
 	$data = json_decode($data, TRUE);   //格式化
	$num = $data['num'];
	$userid = $data['userid'];

	//先把数据库数据查询出来
	//然后改变pojo的值
	//把改完的pojo存入数据库
	$sql = "SELECT * FROM `addpraise` WHERE `userid`=".$userid;
	$result = $dboperate->mysql_query_arry($sql);
	if(!$result) {
		die("Error: ".mysql_error());
	} else {
		while($row = mysql_fetch_array($result)) {
			$pojo = new PraisePojo($row['id'], $row['num'], $row['userid']);
			$pojo->setNum($pojo->getNum()+1);
			
			$sqlUpdate = "UPDATE `addpraise` SET `num`=".$pojo->getNum()." WHERE `userid`=".$pojo->getUserId();
			$res = $dboperate->mysql_query_arry($sqlUpdate);
			if(!$res) {
				//echo "更新数据库失败！";
				$res = array("errcode"=>0, "result"=>"error");
				echo json_encode($res);
			} else {
				//echo "更新数据库成功！";
				$res = array("errcode"=>1, "result"=>"success");
				echo json_encode($res);
			}				
		}
		
	}
?>