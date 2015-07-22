var voyage = require('../models/voyage.js');

var indexController = {

    index : function(req, res) {

        res.redirect('/voyage/' + voyage.first.name);
    },

	voyage: function(req, res) {

        console.log(voyage);

        var location = voyage.locations[req.params.locationName];


        if (!location) {

            res.render('magellandidnotgothere', {locationName : req.params.locationName});

        } else { 

            res.render('voyage', location);
	   }
    },

    next: function(req, res) {
        var location = voyage.locations[req.query.location.toLowerCase()];

        if (location) {
            var nextLocName = location.next ? location.next.name : null;

            res.send({
                location: location.name,
                nextLocation: nextLocName
            });

        } else {

            res.send({});
        }
    }
};

module.exports = indexController;