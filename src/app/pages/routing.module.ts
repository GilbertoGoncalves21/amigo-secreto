import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'groups',
        component: GroupComponent
    },
    {
        path: 'group/:id',
        component: CreateGroupComponent
    },
    {
        path: 'result',
        component: ResultComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }