"use strict";

import indexController from "./indexController";

const controllerInit = {
	init(app, router) {

		router.get("/index/index", indexController.index());
		router.post("/receive", indexController.update());
		
		// app.use(router(_=> {
		// 	_.get("/index/index", indexController.index());
		// 	_.post("/receive", indexController.update());
		// }));
	}
}

export default controllerInit;