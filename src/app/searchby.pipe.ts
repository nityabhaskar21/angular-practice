import { Pipe, PipeTransform } from '@angular/core';
import { Books } from './books';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {
  transform(books: Books[], searchkey: string): any {
    books = books.filter(b =>
      b.title.toLowerCase().includes(searchkey.toLowerCase())
    );
    return books;
  }
}
