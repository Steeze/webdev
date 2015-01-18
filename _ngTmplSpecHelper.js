function preloadTemplate($templateCache, templateName) {
var templates = {};
templates["templates/app/home.html"] = "<ul class=\"list-group\">\
    <li class=\"list-group-item\"  ng-repeat=\"widget in widgets\"> <span class=\"badge\">{{widget.id}}</span>  {{widget.name}} - {{widget.description}}</li>\
</ul>\
\
\
\
";
$templateCache.put(templateName, templates[templateName]);
};