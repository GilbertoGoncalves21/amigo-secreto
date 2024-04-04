import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MenuComponent } from './menu/menu.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';


@NgModule({
  declarations: [
    MenuComponent,
    SimpleDialogComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    MenuComponent,
    SimpleDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule { }