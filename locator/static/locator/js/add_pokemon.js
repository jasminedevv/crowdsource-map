var addPokemon = function(pokemon_name, latitude, longitude) {
    console.log(latitude);
    var dataString = 'name=' + pokemon_name + '&latitude=' + latitude + '&longitude=' + longitude;
    console.log(dataString);
    $.ajax({
        type: "POST",
        url: "add-pokemon/",
        data: dataString,
        success: console.log(pokemon_name + " added"),
    });
}
