"use strict";

const Koa = require("koa");
const Router = require("koa-router");
const koaStatic = require("koa-static");
const koaSwig = require("koa-swig");
const co = require("co");
const babelPolyfill = require("babel-polyfill");
const bodyParser = require('koa-bodyparser');
const initController = require("./controllers/initController.es");
const config = require("./config/config.es");


const app = new Koa();
const router = new Router();

app.use(koaStatic(config.get('staticDir')));

app.use(bodyParser());

app.context.render = co.wrap(koaSwig({
    root: config.get('viewDir'),
    autoescape: true,
    cache: false, // disable, set to false 
    ext: 'html',
    writeBody: false
}));

initController.init(app, router);

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => {
	console.log("服务器已启动！");
});

module.exports = app;