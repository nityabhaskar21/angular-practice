import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  book: Books = new Books();
  msg: string;

  @ViewChild('frm')
  form: NgForm;

  constructor(public booksService: BooksService) {}
  addBook(): void {
    this.booksService.addBooks(this.book);
    this.msg = 'Book Added successfully';
    this.book = new Books();
    this.form.reset();
  }

  ngOnInit(): void {}
}
