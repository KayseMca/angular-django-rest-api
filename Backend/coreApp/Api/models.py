from django.db import models
from django.contrib.postgres.fields import ArrayField
# //from settings import DATE_INPUT_FORMATS

# Create your models here.

class PokedexModelData(models.Model):
    # id = models.IntegerField(unique=True,  primary_key=True)
    name = models.CharField(unique=True, max_length=255, null=False)
    type = models.CharField(max_length = 255, null=True)
    desc = models.TextField(blank=True)
    ability = models.CharField(max_length=255 ,null=True)
    weaknesses = ArrayField(models.CharField(max_length= 255, null=True))
    imagePath = models.CharField(max_length = 255, null = True)


    def __str__(self):
        return self.name


class PokemonModelData(models.Model):
    pokemon = models.CharField(unique=True, max_length=255, null=False)
    gender = models.CharField(max_length = 255, null=True)
    trainer_region = models.CharField(max_length = 255, null=True)
    birth_year = models.DateField()
    
    pokedexData = models.ForeignKey(PokedexModelData, related_name='pokedex',on_delete = models.CASCADE, null=False)

    def __str__(self):
        return self.pokemon
