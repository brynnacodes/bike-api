/*jshint loopfunc: true */
var apiKey = require('./../.env').apiKey;

function Bike(){
}

Bike.prototype.search = function(manufacturer, location, distance) {
  var locationArray = [];
  $.get('https://bikeindex.org/api/v3/search?page=1&per_page=20&manufacturer=' + manufacturer + '&location=' + location + '%20&distance=' + distance + '&stolenness=proximity').then(function(response) {


    for (var i = 0; i < response.bikes.length; i++) {
      $('#manufacturer-results').append('<li>' + response.bikes[i].title +
       response.bikes[i].stolen_location +  '<img src="' + response.bikes[i].large_img + '"></li>');
      var city = response.bikes[i].stolen_location;

      var encoded2 =  city.replace(/,/g, "");
      var encoded =  encoded2.replace(/ /g, "+");
      // console.log(city);
      // console.log(encoded);
       $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + encoded +"&key=" + apiKey).then(function(response) {
         locationArray.push([response.results[0].geometry.location.lat, response.results[0].geometry.location.lng]);
       });
     }
   });
   return locationArray;
};
  exports.bikeModule = Bike;
