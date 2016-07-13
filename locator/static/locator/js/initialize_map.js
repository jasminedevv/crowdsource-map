var newMap = function(lat_num, lon_num, zoom_num) {
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
}


var map;
// why does this not work OH ok lol nvm wtf
function initMap() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      var latitude;
      var longitude;
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        });
        global map = newMap(latitude, longitude, 14);
    } else {
        global map = newMap(0, 0, 3);
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



/*
function initMap() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            newMap(position.coords.latitude, position.coords.longitude, 14);
        });
    } else {
        newMap(0, 0, 3);
    }

    var contentString =
        '<div class="dropdown">' +
        '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example' +
        '<span class="caret"></span></button>' +
        '<ul class="dropdown-menu">' +
        '  <li><a href="#">HTML</a></li>' +
        '  <li><a href="#">CSS</a></li>' +
        '  <li><a href="#">JavaScript</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(map, "dblclick", function(event) {
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();
        var marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'New'
        });
        infowindow.open(map, marker);
        console.log(latitude + ', ' + longitude);
    }); //end addListener
}
*/

/*
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

    var contentString =
    '<div class="dropdown">'+
    '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example'+
    '<span class="caret"></span></button>'+
    '<ul class="dropdown-menu">'+
    '  <li><a href="#">HTML</a></li>'+
    '  <li><a href="#">CSS</a></li>'+
    '  <li><a href="#">JavaScript</a></li>'+
    '</ul>'+
  '</div>'+
'</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

    google.maps.event.addListener(map, "dblclick", function(event) {
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();
        var marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'New'
          });
        infowindow.open(map, marker);
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
*/

// function addPokemon() {
//     var latitude = 0.0;
//     var longitude = 0.0;
//     var listener = New google.maps.event.addListener(map, "dblclick", function(event) {
//         latitude = event.latLng.lat();
//         longitude = event.latLng.lng();
//         console.log(latitude + ', ' + longitude);
//     }); //end addListener
// }
