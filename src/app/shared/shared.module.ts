import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { EditNameDialogComponent } from './edit-name-dialog/edit-name-dialog.component';


@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    EditNameDialogComponent,
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
    MaterialModule,
    FormsModule,
  ]
})
export class SharedModule { }