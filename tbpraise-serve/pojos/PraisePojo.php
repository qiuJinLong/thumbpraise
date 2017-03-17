<?php
	Class PraisePojo {
		private $id;
		private $num;
		private $userid;

		function __construct($id, $num, $userid) {
			$this->id = $id;
			$this->num = $num;
			$this->userid = $userid;
		}

		public function getId() {
			return $this->id;
		}
		public function setId($id) {
			$this->id = $id;
		}
		public function getNum() {
			return $this->num;
		}
		public function setNum($num) {
			$this->num = $num;
		}
		public function getUserId() {
			return $this->id;
		}
		public function setUserId($userid) {
			$this->userid = $userid;
		}
	}
?>
