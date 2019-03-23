var map;
function initMap() {
  // Constructor create a map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.29, lng: 114.16},
    zoom: 11
  });

  var marker = new google.maps.Marker({
    position: {lat: 22.281981, lng: 114.161369},
    map: map,
    title: 'Central'
  });
}
