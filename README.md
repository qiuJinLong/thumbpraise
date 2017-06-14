# thumbpraise 大拇指点赞项目
	-- PHP + KOA2 + swig模板 + x-tag + pjax + es6 + babel + webpack + gulp + 
		yarn + karma + jasmine + phantomjs + mocha + supertest + Selenium + protractor
	-- PHP：负责操作数据库，封装接口数据让node来请求
	-- Nodejs+swig模板+KOA2： 负责渲染页面，数据请求中间件，路由功能
	-- x-tag： 组件化的一个插件，这个是基于html5 web components（这个将来会变成vue或者react)
	-- pjax: pushstate + ajax ，用来做单页带浏览记录的ajax操作
	-- gulp+webpack：gulp用来打包node端程序，webpack用来打包前端程序
	-- es6+babel：使用es6来写js及node，并且使用babel把es6转义成es5
	-- yarn：Facebook出的类似于npm的包管理命令，我主要看中了它的离线模式
	-- karma：utils工具类，功能接口的自动化测试， 
	-- mocha：路由的自动化测试 
	-- selenium+protractor：页面点击的自动化测试

> tbpraise-serve：php服务端
> tbpraise-fed： node前端
> tbpraise-serve放到php环境下运行
> cd tbpraise-fed
> npm install
> npm run webpackdev
> npm run gulp
> cd build
> supervisor app.js

> 测试用例运行方法：
> karam: 
	> cd tbpraise-fed 
	> karam start

> mocha:
	> cd tbpraise-fed\test
	> babel serve.es -o serve.js
	> mocha serve.js

> selenium
	> cd tbpraise-fed\test
	> node e2e.js


	
