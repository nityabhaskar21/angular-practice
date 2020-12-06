import { Component, OnInit } from '@angular/core';
import { SifyService } from '../sify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number;
  user: any;
  msg: string;
  constructor(public sifyService: SifyService) {}

  ngOnInit(): void {}

  viewUser() {
    this.sifyService.getUser(this.userId).subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.msg = undefined;
      },
      error => {
        console.log(error);
        this.msg = 'No user found!';
        this.user = undefined;
      }
    );
    console.log('line1');
    console.log('line2');
  }
}
