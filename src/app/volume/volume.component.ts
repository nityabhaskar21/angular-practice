import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  radius: number = 0;
  height: number = 0;
  volume: string = '';

  constructor() {}

  ngOnInit(): void {}

  volCone(): void {
    this.volume = (
      (Math.PI * this.radius * this.radius * this.height) /
      3
    ).toFixed(2);
  }

  volCylinder(): void {
    this.volume = (Math.PI * this.radius * this.radius * this.height).toFixed(
      2
    );
  }
}
