import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SprettyProjectComponent} from './spretty-project.component';
import {AppExtModule} from '../../app.ext.module';
import {CreatePhotosComponent} from '../create-photos/create-photos.component';
import {CreatePhotosModule} from '../create-photos/create-photos.module';

const routes: Routes = [
  {
    path: '',
    component: SprettyProjectComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    CreatePhotosModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SprettyProjectComponent,
  ]
})
export class SprettyProjectModule {

}
