import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalizedDrawComponent } from './personalized-draw/personalized-draw.component';
import { RandomDrawComponent } from './random-draw/random-draw.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PersonalizedDrawComponent,
    RandomDrawComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }