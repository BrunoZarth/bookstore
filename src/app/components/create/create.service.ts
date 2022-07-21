import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Book } from '../bookstore-app/product-list/model/book';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  book: Book = new Book();
  valid = false;
  errorMsg: any;

  //private url = "http://localhost:8080/api/book/addBook";
  private url = "https://bookstore-management-back.herokuapp.com/api/book/addBook";

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

constructor(private http:HttpClient) { }

addBook(livro: Book){

  this.book.category = livro.category;
  this.book.id = livro.id;
  this.book.img = livro.img;
  this.book.name = livro.name;
  this.book.price = livro.price;
  this.book.quantity = livro.quantity;

  return this.http.post<Book>(this.url, this.book).subscribe({
    next: (b:Book) => {console.log(b), this.valid=true},
    error: (e) => {console.error(e), this.valid = false, this.errorMsg = e.message},
    complete: () => {console.info('complete')}
  })
}

}
