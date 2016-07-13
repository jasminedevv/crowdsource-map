from api_view.permissions import IsOwnerOrReadOnly
from rest_framework import generics, renderers, filters, permissions
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse
#serializers

#models
from django.contrib.auth.models import User
from locator.api_view import ProductViewSet, OptionCategoryViewSet

from locator.api_view import *


@api_view(('GET',))
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'product': reverse('product-list', request=request, format=format),
        'option': reverse('option-list', request=request, format=format),
    })
