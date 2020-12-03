import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bArr: Books[] = [];
  constructor() {
    this.bArr.push({
      bookId: 1009,
      title: 'Android for expert',
      price: 1996,
      author: 'Raj Sinha'
    });
    this.bArr.push({
      bookId: 1002,
      title: 'Complte reference',
      price: 1998,
      author: 'George P R martin'
    });
    this.bArr.push({
      bookId: 1003,
      title: 'Backbone JS',
      price: 2000,
      author: 'Kalvin R v'
    });
    this.bArr.push({
      bookId: 1004,
      title: 'Knck it out',
      price: 2005,
      author: 'J Martin'
    });
    this.bArr.push({
      bookId: 1005,
      title: 'Pointer in c',
      price: 500,
      author: 'Y P Kanikar'
    });
  }

  addBooks(book: Books) {
    this.bArr.push(book);
  }

  removeBooks(bid: number) {
    this.bArr = this.bArr.filter(b => b.bookId != bid);
  }
}
