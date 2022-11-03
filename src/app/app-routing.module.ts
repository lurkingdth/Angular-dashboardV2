import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DistrictComponent } from './district/district.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StateAgencyComponent } from './state-agency/state-agency.component';
import {UserLoginComponent} from './user-login/user-login.component'

const routes: Routes = [
  {path:'login', component: UserLoginComponent},
  {path:'home', component: HomeComponent},
  {path:'department', component: DepartmentComponent},
  {path:'stateagency', component: StateAgencyComponent},
  {path:'district', component: DistrictComponent},
  {path:'gallery', component: GalleryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
