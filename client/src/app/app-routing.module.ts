import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about.json',
        component: AboutComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
