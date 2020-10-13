from rest_framework.fields import ListField
from rest_framework import serializers
from .models import PokemonModelData, PokedexModelData

class PokedexDataSerializers(serializers.HyperlinkedModelSerializer):
    class Meta():
        model = PokedexModelData
        fields = ['id','name', 'type', 'weaknesses', 'ability', 'desc', 'imagePath']



class PokemonDataSerializers(serializers.ModelSerializer):

    class Meta():
        
        model = PokemonModelData
        fields = "__all__"
    
    
    