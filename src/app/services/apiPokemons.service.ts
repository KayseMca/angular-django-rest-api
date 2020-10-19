import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http'

export interface Pokedex {
    id?: number;
    name?:string;
    type?:string;
    desc?:string;
    ability?:string;
    weaknesses?:Array<string>;
    imagePath?:string;
}

export interface Pokemon {
    id?: number;
    pokemon?: string;
    gender?: string;
    trainer_region?: string;
    birth_year?: Date;
    pokedexData?:Pokedex
}
@Injectable({
    providedIn: 'root'
})
export class ApiPokemonsService {

    // for pokemons data
    pokemonsPath = 'http://188.166.104.17/api/pokemons/'

    // for pokedex data
    pokedexPath = 'http:http://188.166.104.17/api/pokedex/'

    constructor(private http:HttpClient) { }

    headers = new Headers({ 'Content-Type': 'application/json'});
    // options = new RequestOptions({ headers: this.headers });
    getPokemons():Observable<Pokemon[]>{
        
        return this.http.get<Pokemon[]>(this.pokemonsPath)
    }
    // getPokemons(): Observable<HttpResponse<Pokemon[]>> {
    //     return this.http.get<Pokemon[]>(
    //     this.pokemonsPath, { observe: 'response' });
    // }

    getPokemon(id:number):Observable<Pokemon>{
        return this.http.get<Pokemon>(this.pokemonsPath+id)
    }

    addPokemon(newPokemon){

        return this.http.post(this.pokemonsPath, newPokemon);
        // .subscribe(data=>{
        //     console.log(data)
        // })
    }

    upDatePokemon(id:number, updatePokemon:Pokemon){
        // updatePokemon.id = id;
        const headers = new HttpHeaders()
            .append('Content-Type' , 'application/json');
            console.log(`${this.pokemonsPath}${id}/`)
        return this.http.patch(`${this.pokemonsPath}${id}/`, updatePokemon, {headers:headers})
        // .subscribe((data)=>{
        //     console.log(data)
        // })
    
    }

    deletePokemon(id:number){
        // updatePokemon.id = id;
        // const headers = new HttpHeaders()
        //     .append('Content-Type' , 'application/json');
            console.log(`${this.pokemonsPath}${id}/`)
        return this.http.delete(`${this.pokemonsPath}${id}/`)
        // .subscribe((data)=>{
        //     console.log("Deleted")
        // })
    
    }


    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Sever Error");
    }
    
    
    // delete(id:number){
    // this.userPokemons = this.userPokemons.filter(pokemon => pokemon.id != id);
    // this.onPokemonUserChanged.next(this.userPokemons.slice())
    // }





    // // for pokedex data processes
    getPokedexs():Observable<Pokedex[]>{
        return this.http.get<Pokedex[]>(this.pokedexPath)
    }

    getPokedex(id:number):Observable<Pokedex>{
        return this.http.get<Pokedex>(this.pokedexPath + id)
    }
}