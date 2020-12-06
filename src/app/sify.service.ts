import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SifyService {
  constructor(public http: HttpClient) {}
  getBooks(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/booklist.json');
  }
  getUser(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  getProducts(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/products.json');
  }
}
