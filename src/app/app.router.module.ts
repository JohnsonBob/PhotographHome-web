import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardsComponent} from './dashboards/dashboards.component';
import {AppExtModule} from './app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent,
    children: [
      {path: '', loadChildren: './pages/source-project/source-project.module#SourceProjectModule'},
      {path: 'sourceproject', loadChildren: './pages/source-project/source-project.module#SourceProjectModule'},
      {path: 'sprettyproject', loadChildren: './pages/spretty-project/spretty-project.module#SprettyProjectModule'},
      // {path: '{profile}', loadChildren: './pages/profile/profile.module#ProfileModule'},
      // {path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
    ]
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardsComponent,
  ],
})
export class AppRouterModule {
}
