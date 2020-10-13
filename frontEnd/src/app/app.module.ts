import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module'



import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


import { AddPokemonReactiveComponent } from './add-pokemon-reactive/add-pokemon-reactive.component';
import { ApiPokemonsService } from './services/apiPokemons.service';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableViewComponent,
    ItemDetailsComponent,
    AddPokemonReactiveComponent,
    DialogComponent,
    
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiPokemonsService ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
