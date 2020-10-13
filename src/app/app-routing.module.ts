import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddPokemonReactiveComponent } from './add-pokemon-reactive/add-pokemon-reactive.component';

const routes: Routes = [
  {path:'pokemons',component:TableViewComponent},
  {path:'',redirectTo:'pokemons',pathMatch:'full'},
  {path:'pokemon/:id',component:ItemDetailsComponent},
  {path:'pokemons/create',component:AddPokemonReactiveComponent},
  {path:'pokemons/create/:id',component:AddPokemonReactiveComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
