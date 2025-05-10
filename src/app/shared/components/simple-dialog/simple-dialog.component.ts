import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <mat-dialog-content>
      <span>{{ message }}</span>
    </mat-dialog-content>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </div>
  `
})
export class SimpleDialogComponent {
  title = 'Título';
  message = 'Mensagem';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data != null) {
      this.title = data.title;
      this.message = data.message;
    }
  }
}
