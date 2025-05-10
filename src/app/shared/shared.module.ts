import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent, EditNameDialogComponent, LayoutComponent, SimpleDialogComponent } from './components';
import { MaskCodePipe } from './pipe';

@NgModule({
  declarations: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    EditNameDialogComponent,
    MaskCodePipe
  ],
  exports: [
    SimpleDialogComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    EditNameDialogComponent,
    MaskCodePipe
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