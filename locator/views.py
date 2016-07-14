from django.shortcuts import render
from models import Pokemon, MapPoint
from django.http import HttpResponse

# Create your views here.
def mainPage(request):
    pokedex = Pokemon.objects.all()
    response = render(request, "base.html", {'pokedex': pokedex})
    return response

def addMapPoint(request):
    user = request.user
    if request.method == "POST" and request.is_ajax():
        name = request.POST['name']
        longitude = float(request.POST['longitude'])
        latitude = float(request.POST['latitude'])
        new = MapPoint(pokemon=Pokemon.objects.get(name=name), lat=latitude, lon=longitude, added_by=user)
        new.save()
        status = "Success!"
        return HttpResponse(status)
    else:
        status= "FAIL"
        return HttpResponse(status)

def getAllMarkers(request):
    markers = MapPoint.objects.all()
    response = render(request, "markers.json", {'markers': markers})
    return response
