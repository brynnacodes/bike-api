
async defer src="https://maps.googleapis.com/maps/api/js?key={{key}}&callback=initMap"

function initMap() {
                var location = {lat: lat, lng: lng};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: location
                });
                var iconBase = '/../img/';
                var icons = {
                   party: {
                       icon: iconBase + 'dolphin.png'
                   }
                };
                var marker = new google.maps.Marker({
                    position: location,
                    icon: icons['party'].icon,
                    map: map
                });
            }
