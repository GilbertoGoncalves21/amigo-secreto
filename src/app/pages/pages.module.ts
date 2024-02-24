import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalizedDrawComponent } from './personalized-draw/personalized-draw.component';
import { RandomDrawComponent } from './random-draw/random-draw.component';
import { ResultComponent } from './result/result.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PersonalizedDrawComponent,
    RandomDrawComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class PagesModule { }