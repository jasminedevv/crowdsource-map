from django.conf.urls import url, include
from api_view import views
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'options', views.OptionCategoryViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'blog', views.BlogViewSet)
router.register(r'product', views.ProductViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
