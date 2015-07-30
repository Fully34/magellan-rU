//- requiring the data structure 
var voyage = require('../models/voyage.js');

var indexController = {

    index : function(req, res) {

        // redirect from index page, so user doesn't have to type in a more complex url
        res.redirect('/voyage/' + voyage.first.name);
    },

	voyage: function(req, res) {

        //- looking at the location from locations sub-object with the same name as locationName in the url
        var location = voyage.locations[req.params.locationName];

        //- handle when the locationName is not a key in the locations sub-object 
        if (!location) {

            res.render('magellandidnotgothere', {locationName : req.params.locationName});

        //-render the voyage jade file with a reference to the discrete location object specified in the above location variable
        } else { 

            res.render('voyage', location);
	   }
    },

    next: function(req, res) {

        //- find the location object that matches the query string from the req object
            //- toLowerCase() takes care of capitalization problems
        var location = voyage.locations[req.query.location.toLowerCase()];

        //- if the location exists, construct and send the json object to the screen
        if (location) {
            var nextLocName = location.next ? location.next.name : null;

            res.send({
                location: location.name,
                nextLocation: nextLocName
            });

        //- otherwise, send an empty object
        } else {

            res.send({});
        }
    }
};

module.exports = indexController;