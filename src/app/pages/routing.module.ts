import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalizedDrawComponent } from './personalized-draw/personalized-draw.component';
import { RandomDrawComponent } from './random-draw/random-draw.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'personalized-draw',
        component: PersonalizedDrawComponent
    },
    {
        path: 'random-draw',
        component: RandomDrawComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }