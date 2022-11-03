import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { StateAgencyComponent } from './state-agency/state-agency.component';
import { DistrictComponent } from './district/district.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule} from '@angular/common/http';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { AboutJharkhandComponent } from './about-jharkhand/about-jharkhand.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    UserLoginComponent,
    HomeComponent,
    DepartmentComponent,
    StateAgencyComponent,
    DistrictComponent,
    GalleryComponent,
    PagenotfoundComponent,
    NoticeBoardComponent,
    AboutJharkhandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
