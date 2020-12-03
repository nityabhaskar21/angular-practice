import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  book: Books;
  msg: string;

  constructor(
    public bookservice: BooksService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let bid = parseInt(params.get('bid'));
      this.book = this.bookservice.bArr.filter(b => b.bookId == bid)[0];
    });
  }

  edit() {
    this.router.navigateByUrl('/view');
    this.msg = 'Updated book';
  }
}
