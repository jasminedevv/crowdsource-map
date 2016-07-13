function getPokeType() {

}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 0,
            lng: 0
        },
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
        // infowindow.open(map, new_marker);
        console.log(latitude + ', ' + longitude);
    }); //end addListener

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setZoom(14);
        });
    }
}
