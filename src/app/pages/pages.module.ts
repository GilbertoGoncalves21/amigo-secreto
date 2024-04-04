import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalizedDrawComponent } from './personalized-draw/personalized-draw.component';
import { RandomDrawComponent } from './random-draw/random-draw.component';
import { ResultComponent } from './result/result.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PersonalizedDrawComponent,
    RandomDrawComponent,
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
    MatTooltipModule
  ]
})
export class PagesModule {}
