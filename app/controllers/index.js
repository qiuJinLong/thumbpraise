import controllerInit from "./controllerInit";
import config from '../../config/config'

const Koa = require("koa");
const Router = require('koa-router');
const babelpolyfill = require("babel-polyfill");
const serve = require('koa-static');
const koaBody   = require('koa-body');
const path = require("path");
const render = require('koa-swig');
const co = require('co');

const app = new Koa();
const router = new Router();


app.context.render = co.wrap(render({
	root: config.get('viewDir'),
	autoescape: true,
	cache: 'memory', // disable, set to false 
	ext: 'html',
	writeBody:false
}));

app.use(koaBody({formidable:{uploadDir: __dirname}}));

app.use(serve(config.get('staticDir')));

controllerInit.getAllRouter(app, router);

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(config.get("port"), () => console.log("服务器已启动！"));