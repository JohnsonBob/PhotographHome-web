import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from '../../app.ext.module';
import {CreatePhotosComponent} from './create-photos.component';


const routes: Routes = [
  {
    path: '',
    component: CreatePhotosComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatePhotosComponent]
})
export class CreatePhotosModule {

}
