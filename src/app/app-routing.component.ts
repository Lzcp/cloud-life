import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './service/commonService';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/cloud-console/cloud-console.module').then(m => m.CloudConsoleModule)
    },
    {
        path: 'login',
        loadChildren: './pages/cloud-login/cloud-login.module#CloudLoginModule',
        canActivate: [LoginGuardService]
    },
    {
        path: '**',
        loadChildren: () => import('./pages/cloud-console/cloud-console.module').then(m => m.CloudConsoleModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })
export class AppRoutingModule { }
