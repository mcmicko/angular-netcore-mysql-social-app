import { Component, OnInit } from '@angular/core';
import { User } from '../../../../_models/user';
import { UsersService } from 'src/app/_services/users.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.css']
})
export class DetailMemberComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user']
    });
  }

  // loadUser() {
  //   this.usersService.getUser(+this.route.snapshot.params['id'])
  //     .subscribe((user: User) => {
  //       this.user = user;
  //     }, error => {
  //       this.alertify.error(error);
  //     });
  // }

}
