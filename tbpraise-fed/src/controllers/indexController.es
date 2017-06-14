"use strict";

const indexModel = require("../models/indexModel.js");

const indexController = {
	index() {
		return async(ctx, next) => {			
			ctx.body = await ctx.render("index.html", {
				title: "大拇指点赞"
			});
		};
	},
	
	star() {
		//判断是否是从pjax来的
		return async(ctx, next) => {
			if(ctx.request.header["x-pjax"]) {
				ctx.body = "<x-star></x-star>";	
			} else {
				ctx.body = await ctx.render("star.html", {
					title: "星星点赞"
				});
			}			
		}
	},

	praise() {
		return async(ctx, next) => {
			if(ctx.request.header["x-pjax"]) {
				ctx.body = "<x-praise></x-praise>";	
			} else {
				ctx.body = await ctx.render("index.html", {
					title: "大拇指点赞"
				});
			}
		}
	},

	update() {
		return async(ctx, next)=>{
			console.log(ctx.request.body.num);
			const indexM = new indexModel(ctx);
			ctx.body = await indexM.updateNum();
		}
	},

	startupdate() {
		return async(ctx, next) => {
			const indexM = new indexModel(ctx);
			ctx.body = await indexM.startupdate();
		}
	}
};

module.exports = indexController;