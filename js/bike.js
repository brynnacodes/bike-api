

function Bike(){
}

Bike.prototype.search = function(manufacturer, location, distance) {
  $.get('https://bikeindex.org/api/v3/search?page=1&per_page=20&manufacturer=' + manufacturer + '&location=' + location + '%20&distance=' + distance + '&stolenness=proximity').then(function(response) {

    for (var i = 0; i < response.bikes.length; i++) {
      $('#manufacturer-results').append('<li>' + response.bikes[i].title +
       response.bikes[i].stolen_location +  '<img src="' + response.bikes[i].large_img + '"></li>');
     }
  });
  var city = "Portland, OR";
  var encoded = str.replace(/ /g, "+");
  alert(encoded);
   $.get("https://maps.googleapis.com/maps/api/geocode/json?address=Portland+OR&key=AIzaSyCxVtVkvIYvgnBsEUQ9eKpOHKPQuJOjrBM").then(function(felix) {
     console.log(felix.results[0].geometry.location.lat);
     console.log(felix.results[0].geometry.location.lng);
   });
};
  exports.bikeModule = Bike;
