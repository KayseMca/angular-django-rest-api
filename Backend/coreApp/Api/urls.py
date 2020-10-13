"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from coreApp.Api import views
from rest_framework import routers
# from CoreApp import views
#from coreApp.Api import urls

router = routers.DefaultRouter()
router.register('pokemons', views.PokemonView)
router.register('pokedex', views.PokedexView)

urlpatterns = [
    # path('', views.index),
    # path('coreApp/', include('coreApp.urls')),
    path('api/',include(router.urls)),
    path('admin/', admin.site.urls),
    #path('name/', include([path('',views.details), path('<int:id>/', views.item)]))
]