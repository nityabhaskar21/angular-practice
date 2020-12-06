import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-guard';
  loginflag = false;

  constructor(public storageService: StorageService) {
    if (localStorage.getItem('userinfo') != null) {
      this.loginflag = true;
    }
  }

  ngOnInit(): void {
    this.storageService.watchStorage().subscribe(data => {
      console.log(data);
      if (data == 'set') {
        this.loginflag = true;
      } else {
        this.loginflag = false;
      }
    });
  }

  doLogout() {
    this.storageService.removeItem('userinfo');
  }
}
