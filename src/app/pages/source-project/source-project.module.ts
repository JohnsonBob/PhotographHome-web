import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SourceProjectComponent} from './source-project.component';
import {AppExtModule} from '../../app.ext.module';
import {CreatePhotosComponent} from '../create-photos/create-photos.component';

const routes: Routes = [
  {
    path: '',
    component: SourceProjectComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SourceProjectComponent,
    CreatePhotosComponent,
  ]
})
export class SourceProjectModule {

}
