"use strict";

import Koa from "koa";
import Router from "koa-router";
import koaStatic from "koa-static";
import koaSwig from "koa-swig";
import co from "co";
import babelPolyfill from "babel-polyfill";
import bodyParser from 'koa-bodyparser';
import initController from "./src/controllers/initController";
import config from "./src/config/config";


const app = new Koa();
const router = new Router();

app.use(koaStatic(config.get('staticDir')));

app.use(bodyParser());

app.context.render = co.wrap(koaSwig({
    root: config.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));

initController.init(app, router);

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => {
	console.log("服务器已启动！");
});

export default app;