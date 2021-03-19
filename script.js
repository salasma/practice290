var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var port = 4182;

var options = { root: __dirname + '/'}

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function(req, res, next)

{


    console.log('url: %s\n\t%s :: %s', req.url, req.method, req.path);


    console.log('body: ', req.body)


    next();

});


app.get('/', function(req, res)

{


    res.type('text/html');


    res.sendFile('hmtl.html', options);

});



var getObjectBreakdown = function(object)

{


    var list = '<ul>';


    for (var key in object)

    {


        list += '<li><strong style="font-family: monospace;">' + key + '</strong>: ' + object[key] + '</li>';

    }


    return list + '</ul>';

}


var getRequestTable = function(req)

{

}


app.get('/', function(req, res)

{


    var html = '<h1>GET Request Received</h1>';


    html += '<table><tbody><tr>';


    html += '<td>url: ' + req.url + '</td>';



    html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';



    html += '</tr></tbody></table>';



    res.send(html);

});



app.post('/', function(req, res)

{


    var html = '<h1>POST Request Received</h1>';

   


    html += '<table><tbody><tr>';

   


    html += '<td>url: ' + req.url + '</td>';



html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';

 

    html += '</tr></tbody></table>';

 

    res.send(html);

});



app.listen(port, function()

{


    console.log("• Started on port " + port);

});
