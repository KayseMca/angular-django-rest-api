import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar'


const MaterialComponents =  [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  FormsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule
  
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
