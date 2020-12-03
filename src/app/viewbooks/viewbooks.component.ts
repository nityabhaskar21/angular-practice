import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  searchstr: string = '';
  constructor(public booksService: BooksService, public book: BooksService) {}

  sortId(): void {
    this.booksService.bArr.sort((a, b) => a.bookId - b.bookId);
  }
  sortTitle(): void {
    this.booksService.bArr.sort((a, b) => a.title.localeCompare(b.title));
  }
  sortPrice(): void {
    this.booksService.bArr.sort((a, b) => a.price - b.price);
  }
  sortAuthor(): void {
    this.booksService.bArr.sort((a, b) => a.author.localeCompare(b.author));
  }

  // filterBooks(e): void {
  //   console.log(e.target.value);
  //   let val = e.target.value.toUpperCase();
  //   if (!val) {
  //     this.book.bArr = this.booksService.bArr;
  //     console.log('working', this.booksService.bArr);
  //   } else {
  //     this.book.bArr = this.book.bArr
  //       .sort((a, b) => a.bookId - b.bookId)
  //       .filter(c => {
  //         if (!val) return c;
  //         else
  //           return (
  //             c.title.toUpperCase().startsWith(val) ||
  //             c.author.toUpperCase().startsWith(val)
  //           );
  //       });
  //   }
  // }

  ngOnInit(): void {}

  delete(bid: number) {
    this.booksService.removeBooks(bid);
  }
}
