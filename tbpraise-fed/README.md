# thumbpraise
	--基于php+koa2+swig+es6+babel+webpack+gulp+单测+e2e+事件稀释的大拇指点赞程序
	--面向对象+函数式编程
	--1.0 PHP和node都混在一个项目里了，2.0版本要让前后端分离成两个单独项目，即PHP一个项目，node一个项目
	

# .babelrc的配置项presets stage-3表示编译的es7的stage-3阶段
	--具体参考http://www.open-open.com/news/view/1769839

### 由于node 7.6版本以下不支持async， 所以在这里我们统一把文件夹改成后缀为.es,然后用babel编译成generator的形式，其实不带async的文件可以不用编译，但是为了统一，还是都编译了吧

### 如何区分Babel中的stage-0,stage-1,stage-2以及stage-3（一）
	--http://www.cnblogs.com/chris-oil/p/5717544.html

``` html 
	You gave us a visitor for the node type "ForAwaitStatement" but it's not a valid type
	--如果出现这个问题，请更新全局的babel-cli，太坑爹了
```

### 当把es文件编译成js文件的时候，在有async的时候，会出现下面的错误，因为js运行的时候，需要用到regeneratorRuntime这个变量。
```html   
regeneratorRuntime is not defined regeneratorRuntime is not defined
	--http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await
	--参考这个人的回答，只安装babel-plugin-transform-runtime就好，但是好像不需要在babelrc的plugins中配置"plugins": [
    ["transform-runtime", {
      "polyfill": false,
      "regenerator": true
    }]
  ]，我先不用这个，看看能不能把项目跑完
  	--我用这种方式不行，还是得用babel-polyfill，然后在页面上import它
```

### async  await还是得好好理解下，我不理解为什么这样返回，用async的好处，对照着代码，在研究下！！！

###  koa2获取post数据别用koa-body了，用koa-bodyparser@3 因为，koa-body的那种转化为genenrator的写法，你在运行的时候会给出一个警告，说在V3版本就要取消了啥的，反正看着警告感觉不太好，而且bodyparser用法更简洁


### 安装karma-phantomjs-launcher的时候，它需要下载一个phantomjs-2.1.1-windows.zip文件，在Users\AppData\Local\Temp\phantomjs下。所以你最好用cnpm在其他文件下，先把这个包安装一遍，这样就可以快速的下载下来这个文件，然后再在你需要的项目下安装这个launcher，这样的话就很快了。

-- 为什么不直接在项目下用淘宝安装，因为淘宝安装完之后，在windows下会出现很多快捷文件夹，很恶心，而且它的问件夹名字都带着版本号，虽然这个很好，但是我不太喜欢，感觉很乱。

--  安装完cnpm之后，执行cnpm install karma-phantomjs-launcher --save-dev --registry=https://registry.npm.taobao.org
--  "jasmine-core": "^2.5.2",
    "karma": "^1.5.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-jasmine": "^1.1.0",
    "karma-phantomjs-launcher": "^1.0.4"
    这五个是单测用到的


# 测试接口用到的框架是mocha
 -- 首先npm install mocha -g
 -- 然后再安装npm install supertest --save-dev
 -- 编写完测试用例之后，到目录下运行mocha 文件名


#
1、需要在全局安装karam-cli和bable-cli

2、该版本完成的功能
1）.使用ES6完成点赞+1功能的父类PraiseButton。
2）.开发子类Thumb实现大拇指方式点赞。
3）.使用Babel编译ES6代码，并使用System.js可加载对应编译后的文件。
4）.将编译后的文件挂载为jQuery的组件。
5）.实现Karma完成对点赞+1组件的单元测试。

3、使用karam进行单测的语句为
karam start

4、进行e2e测试的语句为:
找到要执行e2e的文件，比如叫e2e.js。
然后node e2e.js
参考地址：http://www.cnblogs.com/fnng/p/5854875.html

5、node版本6.9.5

6、数据库用的是mysql，id,userid,num  这三个字段，建完表之后，新增一条数据，设置userid为1即可,数据表的名字叫addpraise

#
#首先是js引入css文件，然后用extract-text-webpack-plugin插件，把js和css文件分离！！！

#
#loader:"url-loader?limit=8192&name=images/[chunkhash:5].[name].[ext]"
--这个地方我用chunkhash就会报错，用hash就不会报错！！！为什么？？？一直没有解决

#
# 你回家也是11点睡，也还得工作，这样的话，你可以在公司，但是别太忙了，轻松点，就像在家一样，然后9点左右下班，回来锻炼会。你要是9点左右下班，往家走，我估计我可以和你一起锻炼。

#
#