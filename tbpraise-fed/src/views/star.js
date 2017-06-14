module.exports = function(templateParams) {
        var _cssList = ['vendor'];
        var webAssetsHelp = require('./webAssetHelp.js')(templateParams, _cssList);
        var _html = "{% extends './layout.html' %} " +
                "{% block title %}{{title}}{% endblock %}" +
                "{% block styles %} " +
                webAssetsHelp.styles +
                "{% endblock %}" +
                '{% block content %}  {% include "../widgets/star.html" %} {% endblock %}' +
                '{% block script%}' +
                webAssetsHelp.scripts +
                '{% endblock%}';
        return _html;
}