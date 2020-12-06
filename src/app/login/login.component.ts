import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string;
  pwd: string;
  users: User[] = [];
  userMap: Map<string, User> = new Map();
  msg: string;
  username: string;

  constructor(private router: Router, private storageservice: StorageService) {}

  ngOnInit(): void {
    this.userMap.set('ram', { uname: 'ram', pwd: 'ram123', role: 'admin' });
    this.userMap.set('tom', { uname: 'tom', pwd: 'tom123', role: 'user' });
  }

  doLogin() {
    let user = this.userMap.get(this.uname);
    if (user != null && user.pwd == this.pwd) {
      this.storageservice.setItem('userinfo', JSON.stringify(user));
      this.msg = undefined;
      this.username = user.uname;
      this.router.navigateByUrl('/');
    } else {
      this.msg = 'Check Your Credentials!';
    }
  }
}
