# Adds pokemon to database
# Will add all 721 unless you remove icons from the icons folder

import os
import requests, json, re
from locator.models import Pokemon

icons = os.listdir('media/icons/')
# download ^these files from http://veekun.com/dex/downloads or use your own icons labeled <number>.png

for pokemon in icons:
    pokedex_id = re.sub('.png', '', pokemon)
    if not '.' in pokedex_id or '-' not in pokedex_id:
        print(pokedex_id)
        url = "http://pokeapi.co/api/v2/pokemon/" + pokedex_id
        print(url)
        response = requests.get(url)
        data = json.loads(response.content)
        name = data.get('name')
        imagepath = 'icons/' + pokemon

        new = Pokemon(name=name, image=imagepath, pokedex_id=pokedex_id)
        new.save()
    # print(data.name)

# hit api with id
# get name
