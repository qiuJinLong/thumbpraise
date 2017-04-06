"use strict";

const indexController = require("./indexController.js");

const controllerInit = {
	init(app, router) {
		router.get("/index/index", indexController.index());
		router.get("/index", indexController.index());
		router.post("/receive", indexController.update());
		
	}
}

module.exports = controllerInit;