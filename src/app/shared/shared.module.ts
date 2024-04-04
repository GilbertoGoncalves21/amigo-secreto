import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MenuComponent,
    SimpleDialogComponent,
    ConfirmDialogComponent
  ],
  exports: [
    MenuComponent,
    SimpleDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule { }