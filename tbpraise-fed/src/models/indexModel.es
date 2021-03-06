const requestPromise = require("request-promise");

class indexModel {
	constructor(ctx) {
		this.ctx = ctx;
	}
	
	updateNum() {
		const options = {
			url: "http://localhost:8081/thumbpraise/tbpraise-serve/services/controService.php",
			method: "POST",
			json: true,
			headers: {
			    "content-type": "application/json",
			},
			body: {num:this.ctx.request.body.num, userid:this.ctx.request.body.userid}
		}

		return new Promise((resolve, reject) => {
			requestPromise(options).then(function(body) {
				resolve(body);
			}).catch(function(err) {
				reject(err);
			});
		})
	}
	
	startupdate() {
		return new Promise((resolve, reject) => {
            resolve({ data: 1 }); 
        })
	}
}

module.exports = indexModel;