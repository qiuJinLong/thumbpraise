import controllerInit from "./controllerInit";
const Koa = require("koa");
const Router = require('koa-router');

var co = require("co");
var babelpolyfill = require("babel-polyfill");
const serve = require('koa-static');
var koaBody   = require('koa-body');
var path = require("path");
var render = require('koa-swig');
var co = require('co');

const app = new Koa();
const router = new Router();

app.context.render = co.wrap(render({
	root: path.join(__dirname, './views'),
	autoescape: true,
	cache: 'memory', // disable, set to false 
	ext: 'html',
	writeBody:false
}));

app.use(koaBody({formidable:{uploadDir: __dirname}}));

app.use(serve('.'));

controllerInit.getAllRouter(app, router);

app.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, () => console.log("服务器已启动！"));