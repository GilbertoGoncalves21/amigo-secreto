import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalizedDrawComponent } from './personalized-draw/personalized-draw.component';
import { RandomDrawComponent } from './random-draw/random-draw.component';
import { ResultComponent } from './result/result.component';

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
    },
    {
        path: 'result',
        component: ResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }