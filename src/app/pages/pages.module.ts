import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RoutingModule } from './routing.module';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { IntegrantComponent } from './group/integrant/integrant.component';
import { LayoutComponent } from '../shared/layout/layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    GroupComponent,
    CreateGroupComponent,
    IntegrantComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})
export class PagesModule {}
