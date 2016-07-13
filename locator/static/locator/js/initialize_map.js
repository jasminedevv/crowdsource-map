function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 3
    });

    map.setOptions({
        disableDoubleClickZoom: true
    });

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
    var infowindow = new google.maps.InfoWindow({
        content: "yes"
    });

    google.maps.event.addListener(map, "dblclick", function(event) {
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();
        var marker = new google.maps.Marker({
            position: {
                lat: latitude,
                lng: longitude
            },
            map: map,
            title: 'New'
        });
        infowindow.open(map, marker);
        console.log(latitude + ', ' + longitude);
    }); //end addListener
}




//// nothing but bullshit below this line
/*
var newMap = function(lat_num, lon_num, zoom_num) {
  console.log(lat_num, lon_num, zoom_num);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: lat_num,
            lng: lon_num
        },
        zoom: zoom_num,
    });
    map.setOptions({
        disableDoubleClickZoom: true
    });
    return map;
}


var map;
// why does this not work?? OH ok. WAIT nvm wtf
function initMap() {
  console.log(map);
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      var latitude;
      var longitude;
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        });
        console.log('now inside:', latitude, longitude)
        map = newMap(latitude, longitude, 14);
        console.log(map);
    } else {
        map = newMap(0, 0, 3);
    }
/*
    var infowindow = new google.maps.InfoWindow({
        content: "yes"
    });

    google.maps.event.addListener(map, "dblclick", function(event) {
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();
        var marker = new google.maps.Marker({
            position: {
                lat: latitude,
                lng: longitude
            },
            map: map,
            title: 'New'
        });
        infowindow.open(map, marker);
        console.log(latitude + ', ' + longitude);
    }); //end addListener
    */
//}
*/
