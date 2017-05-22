

import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";

const userRoutes = [
    {
        path: '',
        component: UsersComponent,

    }
];
export const userRouting = RouterModule.forChild(userRoutes);