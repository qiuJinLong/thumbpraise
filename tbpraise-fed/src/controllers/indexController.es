"use strict";

import indexModel from "../models/indexModel";

const indexController = {
	index() {
		return async(ctx, next) => {			
			ctx.body = await ctx.render("index.html", {
				title: "大拇指点赞"
			});
		};
	},
	update() {
		return async(ctx, next)=>{
			console.log(ctx.request.body.num);
			const indexM = new indexModel(ctx);
			ctx.body = await indexM.updateNum();
		}
	}
};

export default indexController;