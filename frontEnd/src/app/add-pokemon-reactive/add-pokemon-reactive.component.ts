import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'

import { Router, ActivatedRoute } from '@angular/router';
import { TostMessageService } from '../services/tost-message.service';
import { Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { DatePipe } from '@angular/common';
import { ApiPokemonsService, Pokemon, Pokedex } from '../services/apiPokemons.service';

@Component({
  selector: 'app-add-pokemon-reactive',
  templateUrl: './add-pokemon-reactive.component.html',
  styleUrls: ['./add-pokemon-reactive.component.css'],
  providers:[DatePipe, TostMessageService]
})
export class AddPokemonReactiveComponent implements OnInit {

  title:string = "Add new Pokemon User"
  pokemonAddForm: FormGroup;
  pokedex: Pokedex[]
  user: Pokemon;
  url: string;
  editModu: boolean = false
  isLoading = false

  itemIndex: number
  updatePokemon:Pokemon
  pokedexData: Pokedex
  checking:Pokemon[]
  // pokedexDataSubscription: Subscription

  //notUseUserNames = ['kayse','aden']

  
  constructor(private apiPokemons: ApiPokemonsService, private router: Router,
  private route: ActivatedRoute, public datepipe: DatePipe,
    private toast:TostMessageService) {

      this.pokemonAddForm = new FormGroup({
        'username': new FormControl("", [Validators.required,]), /*this.isValidUsername.bind(this)*///not called it like required() we just passing the reference and angular will execute
        'region': new FormControl("", Validators.required),
        'gender': new FormControl("Male", Validators.required),
        'birthDay': new FormControl("", Validators.required),
        'pokedexName': new FormControl("", Validators.required),
      })
  
      }
    

  ngOnInit(): void {
    this.itemIndex = this.route.snapshot.params.id;
    this.editModu = this.itemIndex != null == true;
    
    // subscription for dropdown images
    this.apiPokemons.getPokedexs().subscribe(data => {
      
      this.pokedex = data
    });
    this.apiPokemons.getPokemons().subscribe(data=>{
      this.checking = data
    })

    if(this.editModu){
      this.title = "Update the Pokemon"
      this.apiPokemons.getPokemon(this.itemIndex).subscribe((response: Pokemon) => {
        // console.log(response)
        
        this.pokemonAddForm.reset({
          username: response.pokemon,
          gender: response.gender,
          region: response.trainer_region,
          birthDay: response.birth_year,
          pokedexName: response.pokedexData,
      })
      }); 
    }
    
    
    //initiliazing the form
    
  }


  onSubmit() {
    // let pokedexId = this.pokedex.findIndex(this.pokemonAddForm.get('pokedexName').value)
    console.log(this.pokemonAddForm.get('pokedexName').value)
    // console.log("pokedexID:"+pokedexId)
    this.user = {
      pokemon: this.pokemonAddForm.controls['username'].value,
      gender: this.pokemonAddForm.get('gender').value,
      trainer_region: this.pokemonAddForm.get('region').value,
      birth_year: this.pokemonAddForm.get('birthDay').value,
      pokedexData:this.pokemonAddForm.get('pokedexName').value
      // this.pokedex[this.pokemonAddForm.get('pokedexName').value]
      // console.log(this.pokedexData)
    
    }
    console.log("the user")
    console.log(this.user)

    //update the user
    if (this.editModu) {
      this.apiPokemons.upDatePokemon(this.itemIndex, this.user).subscribe(data=>{
        this.toast.open('successfully updated Pokemon')
        this.router.navigateByUrl('/pokemons');
        // reset form
      this.pokemonAddForm.reset()
      })
      
      
    }

    //add the userdata to service
    else {
      console.log('adding the data')
      this.apiPokemons.addPokemon(this.user).subscribe(data=>{
        this.toast.open('successfully added new Pokemon');
        this.router.navigateByUrl('/pokemons');
        // reset form
      this.pokemonAddForm.reset()
      });
      
      
    }
  
  }

  
  // let's check if the username already exist or not
  isValidUsername(control:FormControl):{[s:string]:boolean} {

    // console.log(this.checking)
    // if(this.pokedex.includes(control.value)){
    //   console.log(control)
    //   return {'anAllowdUserName':true}
    // }
    return null;
  }
  
}

