import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExtModule} from '../../app.ext.module';
import {CreatePhotosComponent} from './create-photos.component';

@NgModule({
  imports: [
    AppExtModule,
    RouterModule
  ],
  declarations: [CreatePhotosComponent],
  exports: [
    CreatePhotosComponent
  ]
})
export class CreatePhotosModule {

}
