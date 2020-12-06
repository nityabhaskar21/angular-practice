import { Component, OnInit } from '@angular/core';
import { SifyService } from '../sify.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(public sifyService: SifyService) {}

  ngOnInit(): void {
    this.sifyService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    });
    console.log('line 2');
  }
}
