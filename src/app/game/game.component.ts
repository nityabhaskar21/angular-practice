import { Component, OnInit } from '@angular/core';
import { SifyService } from '../sify.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameId: number;
  gameName: string;
  gamePrice: number;
  game = [];
  msg: string;

  constructor(public sifyService: SifyService) {}

  viewGames() {
    this.sifyService.getGames().subscribe(
      data => {
        console.log(data);
        this.game = data;
        this.msg = undefined;
      },
      error => {
        console.log(error);
        this.msg = 'No game found!';
        this.game = undefined;
      }
    );
  }

  ngOnInit(): void {
    this.sifyService.getGames().subscribe(
      data => {
        console.log(data);
        this.game = data;
        this.msg = undefined;
      },
      error => {
        console.log(error);
        this.msg = 'No game found!';
        this.game = undefined;
      }
    );
  }
}
