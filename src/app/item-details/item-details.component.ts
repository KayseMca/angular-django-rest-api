import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';
import { ApiPokemonsService, Pokemon, Pokedex } from '../services/apiPokemons.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  itemIndex:number
  selectedPokemon;
  pokemonDataSubscription:Subscription
  isLoading = false

  constructor(private pokedexApi: ApiPokemonsService, private route:ActivatedRoute,
    private dialog:MatDialog) { 
      this.itemIndex = this.route.snapshot.params.id;
      this.getPokemon()
    }

  ngOnInit(): void {
    

    
    
    
  }

  // create the dialog card and get data from the dialogComponent
  onDelete(){
    const dialogRef = this.dialog.open(DialogComponent,{
      data:this.selectedPokemon,
      width:'350px',
      disableClose:true,
      autoFocus:true
    })
  }
  ngOnDestroy(){
    // this.pokemonDataSubscription.unsubscribe();for(let pokemon of this.selectedPokemon){
          // console.log("ok")
  }

  getPokemon(){
  
    this.pokedexApi.getPokemon(this.itemIndex).subscribe(data => {
      this.isLoading = true
      this.selectedPokemon = data
      console.log("from the details")
      let id = this.selectedPokemon.pokedexData
      this.pokedexApi.getPokedex(id).subscribe(data=>{
        this.isLoading = false
        this.selectedPokemon.pokedexData = data
        console.log("the pokedex  ")
        // console.log(this.selectedPokemon.pokedexData)
      })
      console.log(this.selectedPokemon)
    },
    error=>{
      console.log(error)
    })
  }

  
}
