var Bike = require('./../js/bike.js').bikeModule;

var callback = function(mapData) {
  console.log(mapData);
  var uluru = {lat: -25.363, lng: 131.044};
  var portland = {lat: 45.5230622, lng: -122.6764816};
  var arrayMaps = [uluru, portland];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: uluru
  });
  for (var i = 0; i < arrayMaps.length; i++) {
    var marker = new google.maps.Marker({

      position: arrayMaps[i],
      map: map
    });
  }
}
$(document).ready(function() {
  $('#search').click(function() {
    var manufacturer = $('#manufacturer').val();
    var colors = $('#colors').val();
    var location = $('#location').val();
    var distance = $('#distance').val();
    var newBike = new Bike();
    var locationArray = newBike.search(manufacturer, location, distance, callback);


  });
});
