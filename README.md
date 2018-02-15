![Pokemon map. Shows a google map of San Francisco, a modal popping up in the middle with "scy" typed into a searchbox and "scyther" selected.](https://jasminehumbert.com/img/poketracker.png)

# Crowdsource Map
A nest finder designed for Pokemon Go as it was during the final days of the beta. It's mostly obsolete by now but could easily be adapted to other purposes. All 

### Technologies
- Google Maps API
- Django 1.9
- Jets.js
- MarkerClusterer
- Bootstrap
- HTML/CSS/Javascript/JQuery/etc

### Getting it to work
1. Create and run a [virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/).
2. ```pip install -r requirements.txt```
3. ```python manage.py makemigrations locator && python manage.py migrate```
4. download pokemon icons from http://veekun.com/dex/downloads (I recommend sprites used in the Pokémon screen (no animations) but any will work) and put them under /media/icons. Next ```import get_data.py``` from a django shell: ```python manage.py shell```. The script will load whatever pokemon are in the icon folder so you /can/ load all 720 of them if you want but you'll only need gen 1 for Pokemon Go.
5. ```python manage.py createsuperuser```
6. go to ```localhost:8000/map``` and log in
