import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [matDialogClose]="false">Cancelar</button>
      <button mat-button [matDialogClose]="true">Confirmar</button>
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
