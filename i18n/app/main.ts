
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";
import {TRANSLATIONS_FORMAT, TRANSLATIONS, LOCALE_ID} from "@angular/core";
import {TRANSLATION_EN} from "./locale/messages.en";
import {TRANSLATION_FR} from "./locale/messages.fr";


platformBrowserDynamic().bootstrapModule(AppModule,{
    providers: [
        {provide: TRANSLATIONS, useValue: TRANSLATION_FR},
        {provide: TRANSLATIONS_FORMAT, useValue: "xlf"},
        {provide: LOCALE_ID, useValue: "fr"}
    ]
});


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */