require("../utils/addNum.js");
require("../stylesheets/index.css");
class PraiseButton {
	constructor(num, oEle) {
		this.num = num;
		this.oEle = oEle;
		this.timer = null;
	}
	clickAction() {
		const me = this,
			oChildEle = this.oEle.querySelector(".add_num");

		this.oEle.addEventListener("click", ()=>{
			if(this.num < 5) {
				this.sendAjax();
			}
			console.log(me.num);
		}, false);

		oChildEle.addEventListener("webkitAnimationEnd", ()=>{
			this.oEle.classList.remove("active");
			if(this.num === 5) {
				this.oEle.classList.add("disable");
			}
		}, false);
	}

	sendAjax() {
		const me = this;
		if(this.timer) {
			clearTimeout(this.timer);
		} 
		this.timer = setTimeout(()=>{
			this.oEle.classList.add("active");
			this.num = add(me.num);
			//axios.post('./app/controllers/contro.php',{
			axios.post('/receive',{
		       num:this.num,
		       userid:1
		    })
		    .then(function (response) {
		    	console.log(response);
		     	alert(response.data.result);
		    })
		    .catch(function (error) {
		    	console.log(error);
		    });
		}, 300);
		
	}
}

module.exports = PraiseButton;