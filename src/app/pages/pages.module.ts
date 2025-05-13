import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RoutingModule } from './routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ResultComponent,
    GroupComponent,
    CreateGroupComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PagesModule {}
