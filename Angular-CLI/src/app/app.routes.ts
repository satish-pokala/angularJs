import {Test1Component} from "./test1/test1.component";
import {Test2Component} from "./test2/test2.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
/**
 * Created by satish on 16/05/17.
 */


export const appRoutes = [
  {
    path:"",
    redirectTo:'/test1',
    pathMatch:'full'
  },
  {
    path:"test1",
    component:Test1Component
  },
  {
    path:"emp",
    loadChildren:'./emp/emp-routing.module#EmpRoutingModule'
  },
  {
    path:"test2",
    component:Test2Component
  }
]

export const appRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);
