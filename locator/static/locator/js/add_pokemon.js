var addPokemon = function(pokemon_name, latitude, longitude) {
    var dataString = 'name=' + pokemon_name + '&latitude=' + latitude + '&longitude=' + longitude;
    var succeed = false;
    $.ajax({
        type: "POST",
        url: "add-pokemon/",
        data: dataString,
        success: succeed = true,
        failure: $('#post-error').show(),
    });
    console.log(dataString)
    return succeed;
}
