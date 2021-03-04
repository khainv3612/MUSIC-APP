import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {SettingComponent} from '../component/setting/setting.component';
import {HomeComponent} from '../component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'setting', component: SettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
