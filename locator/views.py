from django.shortcuts import render, redirect
from models import Pokemon, MapPoint
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

# Create your views here.
def mapPage(request):
    if request.user.is_authenticated():
        pokedex = Pokemon.objects.all()
        response = render(request, "map.html", {'pokedex': pokedex})
        return response
    else:
        return redirect('login/')

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
        status= "NOPE"
        return HttpResponse(status)

def getAllMarkers(request):
    markers = MapPoint.objects.all()
    response = render(request, "markers.json", {'markers': markers})
    return response

def register(request):
    if request.user.is_authenticated():
        return redirect('/map')
    userform = UserForm(request.POST or None, prefix='user')
    profileform = ProfileForm(request.POST or None, prefix='profile')
    args = {}
    if request.method == 'POST':
        if userform.is_valid() and profileform.is_valid():
            if userform.cleaned_data["confirm_password"] and userform.cleaned_data["password"] == userform.cleaned_data["confirm_password"]:
                user = userform.save()
                #Set email as username
                user.email = userform.cleaned_data['username']
                user.set_password(user.password)
                user.save()
                profile = profileform.save(commit=False)
                profile.user = user
                profile.save()
                #After succesful auth, login user
                new_user = authenticate(username=userform.cleaned_data['username'],
                                        password=userform.cleaned_data['password'])
                login(request, new_user)
                return redirect('/', RequestContext(request,args))
    args['userform'] = userform
    args['profileform'] = profileform
    return render_to_response('account/login.html', RequestContext(request,args))

# def createAccount(request):
#     username = request.POST['username']
#     password = request.POST['password']
#     email = request.POST['email']
#     user = User.objects.create_user(username=username, email=email, password=password)

def loginSubmit(request):
    failed = False
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            return redirect('map/')
        else:
            failed = True
            response = render(request, 'login.html', failed)
            return response
    else:
        failed = True
        response = render(request, 'login.html', failed)
        return response
