
import {UsersComponent} from "./users.component";
import {NgModule} from "@angular/core";
import {userRouting} from "./users.routes";
import {CommonModule} from "@angular/common";
import {UsersService} from "./users.service";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        userRouting,
        CommonModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [
        UsersService
    ]
})

export class UsersModule {

}