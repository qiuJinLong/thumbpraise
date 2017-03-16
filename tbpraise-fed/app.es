"use strict";

import koa from 'koa';
import router from "koa-simple-router";
import initController from "./src/controllers/initController";

const app = new koa();

initController.init(app, router);

app.listen(3000, () => {
	console.log("服务器已启动！");
});