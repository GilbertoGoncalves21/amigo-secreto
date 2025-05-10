import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title style="font-size: 1.5rem; font-weight: bold">{{ data.title }}</h1>
    <mat-dialog-content>
      <p style="font-size: 1rem;">{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions style="display: flex; justify-content: space-between;">
      <button mat-button [matDialogClose]="false" style="font-size: 1rem; background-color: #e63939; color:white">Cancelar</button>
      <button mat-button [matDialogClose]="true" style="font-size: 1rem; background-color: #0070FF; color:white">Confirmar</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  title = 'Título';
  message = 'Mensagem';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data != null) {
      this.title = data.title;
      this.message = data.message;
    }
  }
}
