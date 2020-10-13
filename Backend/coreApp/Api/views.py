from django.shortcuts import render
from rest_framework import  viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import PokedexModelData, PokemonModelData
from .serializers import PokemonDataSerializers, PokedexDataSerializers

class PokemonView(viewsets.ModelViewSet):
    queryset = PokemonModelData.objects.all()
    #print((queryset.get(pokedexData)))
    serializer_class = PokemonDataSerializers


class PokedexView(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = PokedexModelData.objects.all()
    serializer_class = PokedexDataSerializers