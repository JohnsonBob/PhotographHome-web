import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SprettyProjectComponent} from './spretty-project.component';
import {AppExtModule} from '../../app.ext.module';

const routes: Routes = [
  {
    path: '',
    component: SprettyProjectComponent
  }
];

@NgModule({
  imports: [
    AppExtModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SprettyProjectComponent]
})
export class SprettyProjectModule {

}
