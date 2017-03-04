"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	function PraiseButton(num, oEle) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
		this.oEle = oEle;
		this.timer = null;
	}

	_createClass(PraiseButton, [{
		key: "clickAction",
		value: function clickAction() {
			var _this = this;

			var me = this,
			    oChildEle = this.oEle.querySelector(".add_num");

			this.oEle.addEventListener("click", function () {
				if (_this.num < 5) {
					_this.sendAjax();
				}
				console.log(me.num);
			}, false);

			oChildEle.addEventListener("webkitAnimationEnd", function () {
				_this.oEle.classList.remove("active");
				if (_this.num === 5) {
					_this.oEle.classList.add("disable");
				}
			}, false);
		}
	}, {
		key: "sendAjax",
		value: function sendAjax() {
			var _this2 = this;

			var me = this;
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(function () {
				_this2.oEle.classList.add("active");
				_this2.num = add(me.num);
				//axios.post('./app/controllers/contro.php',{
				axios.post('/receive', {
					num: _this2.num,
					userid: 1
				}).then(function (response) {
					console.log(response);
					alert(response.data.result);
				}).catch(function (error) {
					console.log(error);
				});
			}, 300);
		}
	}]);

	return PraiseButton;
}();

exports.default = PraiseButton;
