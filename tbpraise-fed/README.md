# thumbpraise
	--基于es6+babel+koa2+php+swig+单测+e2e+事件稀释的大拇指点赞程序
	--面向对象+函数式编程
	--1.0 PHP和node都混在一个项目里了，2.0版本要让前后端分离成两个单独项目，即PHP一个项目，node一个项目
	

# .babelrc的配置项presets stage-3表示编译的es7的stage-3阶段
	--具体参考http://www.open-open.com/news/view/1769839

# 由于node 7.6版本以下不支持async， 所以在这里我们统一把文件夹改成后缀为.es,然后用babel编译成generator的形式，其实不带async的文件可以不用编译，但是为了统一，还是都编译了吧


# 

# 如何根据路由，直接返回cdn的静态页面？？？？？？
#
#如何区分Babel中的stage-0,stage-1,stage-2以及stage-3（一）
	--http://www.cnblogs.com/chris-oil/p/5717544.html

# You gave us a visitor for the node type "ForAwaitStatement" but it's not a valid type
	--如果出现这个问题，请更新全局的babel-cli，太坑爹了


#  regeneratorRuntime is not defined regeneratorRuntime is not defined
	--http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await
	--参考这个人的回答，只安装babel-plugin-transform-runtime就好，但是好像不需要在babelrc的plugins中配置"plugins": [
    ["transform-runtime", {
      "polyfill": false,
      "regenerator": true
    }]
  ]，我先不用这个，看看能不能把项目跑完



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

6、数据库用的是mysql，id,userid,num  这三个字段，建完表之后，新增一条数据，设置userid为1即可