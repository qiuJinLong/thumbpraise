const indexController = {

	index(app, router) {
		return async(ctx, next) => {
			ctx.body = await ctx.render("index.html");
		};	
	}
}

export default indexController;