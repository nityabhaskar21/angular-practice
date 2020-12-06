import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SifyService {
  constructor(public http: HttpClient) {}
  getGames(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/GameList.json');
  }
  getAlbum(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
  getEmps(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/emps.json');
  }
}
