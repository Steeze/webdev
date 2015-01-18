module.exports = function(app){

    var widgets = [
        {id: 1, name:'widgetOne', description: 'widget one description'},
        {id: 2, name:'widgetTwo', description: 'widget two description'},
        {id: 3, name:'widgetThree', description: 'widget three description'},
        {id: 4, name:'widgetFour', description: 'widget four description'},
        {id: 5, name:'widgetFive', description: 'widget five description'},
        {id: 6, name:'widgetSix', description: 'widget six description'},
        {id: 7, name:'widgetSeven', description: 'widget seven description'}
    ];

    app.get('/v1/Widgets/:id', function(req, res){
        var result = data.filter(function(x){
           return x.id == req.param.id;
        });

        res.json(result[0]);
    });

    app.get('/v1/Widgets/', function(req, res){
        res.json(widgets);
    });
};

