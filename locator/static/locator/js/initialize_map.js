var map;

function initMap() {
  var pos;
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };

          map.setCenter(pos);
          map.setZoom(14);
      });
  }

    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 3
    }); // end standard map initialize

    map.setOptions({
        disableDoubleClickZoom: true
    });

    google.maps.event.addListener(map, "dblclick", function(event) {
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();
        $('#new-pokemon-coords').val(latitude + ', ' + longitude);
        $('#new-pokemon-coords').attr('lat', latitude);
          $('.add-menu').css({'bottom':'0'})
          $('.add-menu h1').hide();
        // infowindow.open(map, new_marker);
        console.log(latitude + ', ' + longitude);
    }); //end addListener

    //google.maps.event.addListener(map, 'idle', showMarkers);
    // instead do an on change of the filter menu and pass it an array of filters to look for

    // Try HTML5 geolocation.
}

function deleteMarkers() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}
