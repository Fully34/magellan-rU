
//============================== require ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var voyage = require('./models/voyage.js');

//============================== config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== routing ==============================//

//- .index method redirects to the first location on the voyage
app.get('/', indexController.index)

//- .voyage method takes the locationName from the req.params object
app.get('/voyage/:locationName', indexController.voyage);

//- send json information from query string
app.get('/next', indexController.next)

//============================== server setup ==============================//
        
var server = app.listen(5025, function() {
	console.log('Express server listening on port ' + server.address().port);
});
