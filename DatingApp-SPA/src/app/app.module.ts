import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './components/layouts/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ErrorIntercepterProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './components/main/members/member-list/member-list.component';
import { ListComponent } from './components/main/list/list.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { UsersService } from './_services/users.service';
import { MemberCardComponent } from './components/main/members/member-card/member-card.component';
import { DetailMemberComponent } from './components/main/members/detail-member/detail-member.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { EditMemberComponent } from './components/main/members/edit-member/edit-member.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './components/main/members/photo-editor/photo-editor.component';
import { ListsResolver } from './_resolvers/lists.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListComponent,
    MessagesComponent,
    MemberCardComponent,
    DetailMemberComponent,
    EditMemberComponent,
    PhotoEditorComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorIntercepterProvide,
    AlertifyService,
    AuthGuard,
    UsersService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    ListsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
