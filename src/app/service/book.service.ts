import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../bookmanage/model/book";


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/books");
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:3000/books/" + id);
  }

  create(book: Book): Observable<any> {
    return this.http.post("http://localhost:3000/books", book);
  }

  update(book : Book): Observable<any> {
    return this.http.put("http://localhost:3000/books/" + book.id, book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/books/" + id)
  }
}
