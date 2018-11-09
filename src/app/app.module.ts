import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BitService, ConfigService, EventsService, HttpService, NgxBitModule} from 'ngx-bit';
import {RouterModule, Routes} from '@angular/router';
import {Auth} from './guard/auth.service';


registerLocaleData(zh);

const routes: Routes = [
  {path: '', loadChildren: './app.router.module#AppRouterModule'},
  // {path: '', loadChildren: './app.router.module#AppRouterModule', canActivate: [Auth]},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  // {path: 'register', loadChildren: './app.router.module#AppRouterModule'},
  {path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
  // {path: 'home', loadChildren: './pages/home/home.module#HomeModule'},

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxBitModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [
    {
      provide: ConfigService,
      useValue: environment.bit
    },
    BitService,
    EventsService,
    HttpService,
    Auth,
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
