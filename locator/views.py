from django.shortcuts import render

# Create your views here.
def mainPage(request):
    response = render(request, "base.html")
    return response
