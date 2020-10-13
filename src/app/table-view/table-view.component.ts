import { Component, OnInit } from '@angular/core';
import { ApiPokemonsService, Pokedex, Pokemon } from '../services/apiPokemons.service';
import { Observable, BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']

})
export class TableViewComponent implements OnInit {

  
  data:Pokemon[];
  pokedexs:Pokedex[]
  pokemonsubscription
  isLoading = false
  errorApi = null

  headElements = ['ID','Pokemon', 'Gender', 'Trainer Region', 'Birth Date', 'Pokedex','View Details'];

  constructor( private pokemonApi:ApiPokemonsService,) {
    
    
  }

  ngOnInit(): void {
        
    this.getPokemons()
  }

  // instead of pokemon having an Id of the pokedex, is better to retieve the datas of that id   to the pokemon attribute
getPokemons(){

  this.isLoading = true
  
  // subsscribing Api data from the this method
  this.pokemonApi.getPokemons().subscribe(data => {
    
    
      this.data = data;
      this.isLoading = false
      this.errorApi = data == null  || data.length === 0;
      
      for (let pokemon of this.data) {
        // this.isLoading = true
        let id = pokemon.pokedexData;
        // console.log(typeof(id))
        this.pokemonApi.getPokedex(Number(id)).subscribe(data => {
          pokemon.pokedexData = data;
          this.errorApi = data == null  || data.id === 0;
        });
        
      }

    },
      error => {
        console.log(error);
      })
  
}

  
}
