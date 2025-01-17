import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    LayoutComponent,
  ],
  exports: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MaterialModule
  ]
})
export class SharedModule { }