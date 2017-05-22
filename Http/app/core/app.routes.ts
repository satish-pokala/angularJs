import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";

const appRoutes = [
    {
        path: '',
        redirectTo:'/users',
        pathMatch:'full'
    },
    {
        path: 'users',
        loadChildren: '../users/users.module#UsersModule'
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);