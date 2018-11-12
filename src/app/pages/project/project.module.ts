import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from '../../app.ext.module';
import {ProjectComponent} from './project.component';

@NgModule({
  imports: [
    AppExtModule,
    RouterModule
  ],
  declarations: [ProjectComponent],
  exports: [
    ProjectComponent
  ]
})
export class ProjectModule {

}
