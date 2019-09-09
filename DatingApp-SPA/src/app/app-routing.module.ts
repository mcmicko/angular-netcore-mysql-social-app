import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layouts/home/home.component';
import { MemberListComponent } from './components/main/members/member-list/member-list.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { ListComponent } from './components/main/list/list.component';
import { AuthGuard } from './_guards/auth.guard';
import { DetailMemberComponent } from './components/main/members/detail-member/detail-member.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { EditMemberComponent } from './components/main/members/edit-member/edit-member.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListComponent, resolve: {users: ListsResolver} },
      { path: 'members/:id', component: DetailMemberComponent, resolve: {user: MemberDetailResolver} },
      { path: 'member/edit', component: EditMemberComponent,
        resolve: {user: MemberEditResolver}
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
