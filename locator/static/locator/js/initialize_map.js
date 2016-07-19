var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 45,
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

function initMarkers() {
    var markers_json;
    // get the json file with all the markers in it
    var xhrObject = new XMLHttpRequest();
    xhrObject.onreadystatechange = function() {
        if (xhrObject.readyState === 4) {
            if (xhrObject.status === 200 || xhrObject.status === 304) {
                locations = JSON.parse(xhrObject.responseText);
                var marker, i;
//console.log('various errors sometimes show up here and I have no idea why');
                var infowindow = new google.maps.InfoWindow;
                for (i = 0; i < locations.length; i++) {
                    var obj = locations[i];
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(obj.lon, obj.lat),
                        map: map,
                        draggable: false,
                        name: obj.name,
                        icon: "media/" + obj.icon,
                    });

                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infowindow.setContent(/*locations[i][0]*/obj.name);
                            infowindow.open(map, marker);
                        }
                    })(marker, i));
                }
            }
        }
    };
    xhrObject.open(
        "GET",
        "all-markers/",
        true
    );
    xhrObject.send();
}
