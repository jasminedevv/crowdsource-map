![Pokemon map. Shows a google map of San Francisco, a modal popping up in the middle with "scy" typed into a searchbox and "scyther" selected.](http://jasminehumbert.com/img/poketracker.png)

# Crowdsource Map
A nest finder designed for Pokemon Go as it was during the final days of the beta. It's mostly obsolete by now but feel free to fork if you see any use for it. I never got around to implementing an essential feature: filtering markers. Nonetheless it was a fun project. Adapting it to a similar purpose should be as easy as changing some names around and adding different icons to the database.

### Technologies
- Google Maps API
- Django 1.9
- Jets.js
- MarkerClusterer
- Bootstrap
- HTML/CSS/Javascript/JQuery/etc

### Getting it to work
1. Create and run a virtualenv.
2. ```pip install -r requirements.txt```
3. make migrations locator and migrate
4. download pokemon icons from http://veekun.com/dex/downloads (I recommend sprites used in the Pokémon screen (no animations) but any will work) and put them under /media/icons. Next ```import get_data.py``` from a django shell: ```python manage.py shell```. The script will load whatever pokemon are in the icon folder so you /can/ load all 720 of them if you want but you'll only need gen 1 for Pokemon Go.
5. createsuperuser
6. go to ```localhost:8000/map``` and log in
