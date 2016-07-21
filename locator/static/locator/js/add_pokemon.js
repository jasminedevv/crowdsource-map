var addPokemon = function(pokemon_name, latitude, longitude, day, hour_found) {
    var dataString = 'name=' + pokemon_name + '&latitude=' + latitude + '&longitude=' + longitude + '&day=' + day + '&hour_found=' + hour_found;
    var success = $.ajax({
        type: "POST",
        url: "add-pokemon/",
        data: dataString,
    })
    // .done(function(data, statusText, xhr) {
    //     console.log(xhr.status);
    // });
    console.log(success);
    if (success.status = 200) {
    console.log('heeelp');
        return true;
    } else {
    console.log('wtf javascript');
        return false;
    }
}
