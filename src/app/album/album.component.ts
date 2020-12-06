import { Component, OnInit } from '@angular/core';
import { SifyService } from '../sify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumId: number;
  album: any;
  msg: string;
  constructor(public sifyService: SifyService) {}

  ngOnInit(): void {}
  viewAlbum() {
    this.sifyService.getAlbum(this.albumId).subscribe(
      data => {
        console.log(data);
        this.album = data;
        this.msg = undefined;
      },
      error => {
        console.log(error);
        this.msg = 'No album found!';
        this.album = undefined;
      }
    );
    console.log('line1');
    console.log('line2');
  }
}
