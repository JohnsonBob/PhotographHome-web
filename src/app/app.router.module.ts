import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardsComponent} from './dashboards/dashboards.component';
import {AppExtModule} from './app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      // {path: '', loadChildren: './pages/welcome/welcome.module#WelcomeModule'},
      // {path: '{profile}', loadChildren: './pages/profile/profile.module#ProfileModule'},
      // {path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
    ]
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsComponent
  ],
})
export class AppRouterModule {
}
