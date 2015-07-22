
//============================== require ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var voyage = require('./models/voyage.js');

//============================== The app ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index)
app.get('/voyage/:locationName', indexController.voyage);
app.get('/next', indexController.next)

var server = app.listen(5025, function() {
	console.log('Express server listening on port ' + server.address().port);
});
