import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from '../../app.ext.module';
import {ProjectDetailComponent} from './project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectDetailComponent]
})
export class ProjectDetailModule {

}
