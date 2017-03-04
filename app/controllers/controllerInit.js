import indexController from "./indexController";
const Koa = require("koa");
const Router = require('koa-router');
const request = require("request");

const controllerInit = {

	requestPromise(options) {
	  return new Promise(function (resolve, reject) {
	    request(options, function(err, response, body) {
	      if (err) reject(err);
	      resolve(body);
	    });
	  });
	},

	getAllRouter(app, router) {

		
		router.get("/", indexController.index(app, router));
		router.get("/index", indexController.index(app, router));
		router.get("/index.html", indexController.index(app, router));
		router.get("/index/index", indexController.index(app, router));



		router.post('/receive', async(ctx, next) => {
			console.log(ctx.request.body);

		 	var body = await this.requestPromise({
				url: "http://localhost:8081/alles2016pk/thumbpraise/app/services/controService.php",
				method: "POST",
				json: true,
				headers: {
				    "content-type": "application/json",
				},
		    	body: {num:ctx.request.body.num, userid:ctx.request.body.userid}
			});	  

			ctx.body = body;
		});
	}
}

export default controllerInit;

