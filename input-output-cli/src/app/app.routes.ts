import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ParentComponent} from "./parent/parent.component";
/**
 * Created by satish on 18/05/17.
 */


export const appRoutes =[
  {
    path:'',
    redirectTo:'/parent',
    pathMatch:'full'
  },
  {
    path:'parent',
    component:ParentComponent
  }

]

export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);
