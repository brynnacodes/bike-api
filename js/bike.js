/*jshint loopfunc: true */
var apiKey = require('./../.env').apiKey;

function Bike(){
}

Bike.prototype.search = function(manufacturer, location, distance, callback) {
  var locationArray = [];

  $.get('https://bikeindex.org/api/v3/search?page=1&per_page=20&manufacturer=' + manufacturer + '&location=' + location + '%20&distance=' + distance + '&stolenness=proximity').then(function(response) {


    for (var i = 0; i < response.bikes.length; i++) {
      var image = null;
      if (response.bikes[i].thumb) {
        image = '<img src="' + response.bikes[i].thumb + '">'
      } else {
        image = ":  no image found";
      }
      $('#manufacturer-results').append('<li>' + response.bikes[i].title +
       response.bikes[i].stolen_location + image + '</li>');
      var city = response.bikes[i].stolen_location;
       $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city +"&key=" + apiKey).then(function(response2) {
         coordinates = [response2.results[0].geometry.location.lat, response2.results[0].geometry.location.lng];
         locationArray.push(coordinates);



       });

     }.then(function(){
          callback(locationArray);
     });
   });


};
  exports.bikeModule = Bike;
