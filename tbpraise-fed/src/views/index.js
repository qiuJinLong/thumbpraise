module.exports = function(templateParams) {
	var _cssList = ["vendor"];
	var webAssetHelp = require("./webAssetHelp.js")(templateParams, _cssList);
	var _html = '{% extends "layout.html" %}'+
				'{% block title %}{{title}}{% endblock %}'+
				'{% block styles %}'+
					webAssetHelp.styles+
				'{% endblock %}'+
				'{% block content %}'+
					'{% include "../widgets/index.html" %}'+
				'{% endblock %}'+
				'{% block script %}'+
					webAssetHelp.scripts+
				'{% endblock %}';
	return _html;
};