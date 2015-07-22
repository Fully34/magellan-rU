var voyage = {
    locations: {},
    first: null,
    last: null
}

var Location = function(name, pic) {

    this.name = name;
    this.pictureURL = pic;
    this.next = null;
    this.prev = null;
}

var addLocation = function(name, pic) {

    var newLoc = new Location(name, pic);

    voyage.locations[newLoc.name] = newLoc;

    if (voyage.last) {

        // if you try to add a full object as the next or prev property value, we create infinite loops.  Need to set string vals for next/prev props and find the object with that name
        voyage.last.next = newLoc;
        newLoc.prev = voyage.last;
    }

    if (!voyage.first) {
        voyage.first = newLoc;
    }

    voyage.last = newLoc;
}

addLocation('seville', 'http://www.thousandwonders.net/covers/dd/Seville.jpg');

addLocation('canary islands', 'http://www.wallpaperseries.com/files/pics/Canary%20Islands%20Wallpaper.jpg');

addLocation('cape verde', 'http://www.africa-ontherise.com/wp-content/uploads/2015/05/S_Nicolau.jpg');

addLocation('strait of magellan', 'http://static1.squarespace.com/static/538c98c7e4b03039efa73956/t/53b75485e4b078c586eb3550/1404523654696/main_image.jpg?format=1500w');

addLocation('guam', 'http://www.thedailychronic.net/wp-content/uploads/2015/07/Guam-from-air.jpg');

addLocation('philippines', 'http://s1.it.atcdn.net/wp-content/uploads/2013/01/El-Nido-Philippines-PALAWAN.jpg');

// console.log(voyage);

module.exports = voyage;







