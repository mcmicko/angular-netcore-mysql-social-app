import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layouts/home/home.component';
import { MemberListComponent } from './components/main/member-list/member-list.component';
import { MessagesComponent } from './components/main/messages/messages.component';
import { ListComponent } from './components/main/list/list.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
