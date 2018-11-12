import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SourceProjectComponent} from './source-project.component';
import {AppExtModule} from '../../app.ext.module';
import {CreatePhotosModule} from '../create-photos/create-photos.module';

const routes: Routes = [
  {
    path: '',
    component: SourceProjectComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes),
    CreatePhotosModule,
  ],
  declarations: [
    SourceProjectComponent,
  ]
})
export class SourceProjectModule {

}
