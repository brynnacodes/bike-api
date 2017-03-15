// 
// async defer src="https://maps.googleapis.com/maps/api/js?key={{key}}&callback=initMap"
//
// function initMap() {
//                 var location = {lat: lat, lng: lng};
//                 var map = new google.maps.Map(document.getElementById('map'), {
//                     zoom: 15,
//                     center: location,
//                     styles: [{"featureType":"landscape","stylers":[{"hue":"#FFE100"},{"saturation":34.48275862068968},{"lightness":-1.490196078431353},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FF009A"},{"saturation":-2.970297029703005},{"lightness":-17.815686274509815},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FFE100"},{"saturation":8.600000000000009},{"lightness":-4.400000000000006},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFE100"},{"saturation":8.600000000000009},{"lightness":-4.400000000000006},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF19"},{"saturation":-30.526315789473685},{"lightness":-10.509803921568633},{"gamma":1}]}]
//                 });
//                 var iconBase = '/../img/';
//                 var icons = {
//                    party: {
//                        icon: iconBase + 'dolphin.png'
//                    }
//                 };
//                 var marker = new google.maps.Marker({
//                     position: location,
//                     icon: icons['party'].icon,
//                     map: map
//                 });
//             }
