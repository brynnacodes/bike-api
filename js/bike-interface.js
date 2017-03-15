var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('#search').click(function() {
    var manufacturer = $('#manufacturer').val();
    var colors = $('#colors').val();
    var location = $('#location').val();
    var distance = $('#distance').val();
    var newBike = new Bike();
    newBike.search(manufacturer, location, distance);


  });
});
