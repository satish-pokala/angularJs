import {enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {TRANSLATIONS_EN} from "./locale/messages.en";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,{providers:[

  {provide:TRANSLATIONS,useValue:TRANSLATIONS_EN},
  {provide:TRANSLATIONS_FORMAT,useValue:'xlf'},
  {provide:LOCALE_ID,useValue:navigator.language},

  ]}
);
