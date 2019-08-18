import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './components/layouts/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ErrorIntercepterProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './components/main/member-list/member-list.component';
import { ListComponent } from './components/main/list/list.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    AuthService,
    ErrorIntercepterProvide,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
