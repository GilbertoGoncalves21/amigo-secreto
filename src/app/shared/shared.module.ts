import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MaterialModule
  ]
})
export class SharedModule { }