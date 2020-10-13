import { Component, Optional, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Router } from '@angular/router';
import { TostMessageService } from '../services/tost-message.service';
import { ApiPokemonsService } from '../services/apiPokemons.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers:[TostMessageService]
})
export class DialogComponent  {

  pokemon
  itemIndex: number

  constructor(public dialogRef:MatDialogRef<DialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private apiPokemon: ApiPokemonsService, private toast: TostMessageService, private router:Router) {
      this.pokemon = this.data
    }


    
  onClose(){
    console.log("closed")
    this.dialogRef.close()
  }

  onDelete(){
    // this.pokemonService.delete(this.data.id);
    this.apiPokemon.deletePokemon(this.data.id).subscribe(data=>{
      this.toast.open('Successfuly deleted!!');
      this.router.navigateByUrl('/pokemons');
    });

  
  }
}
