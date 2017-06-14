"use strict";

const indexController = require("./indexController.js");

const controllerInit = {
	init(app, router) {
		router.get("/index/index", indexController.index());
		router.get("/index", indexController.index());
		router.get("/index/praise", indexController.praise());
		router.get("/index/star", indexController.star());
		router.get("/index/update", indexController.update());
		router.post("/receive", indexController.update());
		router.get("/index/startupdate", indexController.startupdate());
		
	}
}

module.exports = controllerInit;