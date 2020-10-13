import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition} from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class TostMessageService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackbar: MatSnackBar) { }

  public open(message){
    this.snackbar.open(message,'dismiss', {
      duration:2000,
      horizontalPosition : this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['mat-toolbar', 'green-snackbar']
    });
  }
}
