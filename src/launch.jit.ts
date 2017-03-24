/**
 * Created by X.Jason on 2017/3/23.
 */

import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}
platformBrowserDynamic().bootstrapModule(AppModule)
