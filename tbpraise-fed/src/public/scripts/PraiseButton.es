require("../utils/addNum.js");
require("../stylesheets/index.css");
class PraiseButton {
	constructor(num) {
		this.num = num;
	}

	clickAction() {
		axios.get('/index/startupdate')
			.then(function(response) {})
			.catch(function(error) {
				console.log(error);
			});
	}
	
	sendAjax() {
		this.num = add(this.num);
		axios.post('/receive',{
	       num: this.num,
	       userid:1
	    })
	    .then(function (response) {
	    	console.log(response);
	     	alert(response.data.result);
	    })
	    .catch(function (error) {
	    	console.log(error);
	    });
	}
		
	
}

module.exports = PraiseButton;