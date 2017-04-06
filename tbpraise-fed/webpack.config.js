const devWebpack = require("./config/webpack.dev.js");
const prodWebpack = require("./config/webpack.prod.js");

switch(process.env.NODE_ENV) {
	case "dev":
		module.exports = devWebpack;
		break;
	case "prod":
		module.exports = prodWebpack;
		break;
	default:
		module.exports = devWebpack;
}