import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupComponent } from './group/group.component';
import { IntegrantComponent } from './group/integrant/integrant.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'create-group',
        component: CreateGroupComponent
    },
    {
        path:'group',
        component: GroupComponent
    },
    {
        path:'integrants',
        component: IntegrantComponent
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