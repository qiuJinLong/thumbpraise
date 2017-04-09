const Thumb = require("./Thumb.es");
const thumb = new Thumb(1);

xtag.register("x-praise", {
	content:'<div class="wrap">'+
				'<div id="praise" class="content">'+
					'<a id="addNum" class="add_num">+1</a>'+
				'</div>'+
			'</div>',
	methods: {
		praise: function() {
			console.log("methods this: ");
			console.log(this);

			let _this = this;
			this.classList.add("active");
			thumb.sendAjax();
			setTimeout(function() {
				_this.classList.remove("active");
			}, 1000);
		}
	},
	events: {
		click: function(e) {
			console.log("events this: ");
			console.log(this);

			let _this = this;
			if(e.target.id == "praise") {
				if(this.timer) {
					clearTimeout(this.timer);
				} 
				this.timer = setTimeout(function() {
					_this.praise();
				}, 500);
			}		
		}
	}
});