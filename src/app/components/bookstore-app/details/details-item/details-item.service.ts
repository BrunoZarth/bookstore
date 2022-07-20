import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../product-list/model/book';

@Injectable({
  providedIn: 'root'
})
export class DetailsItemService {

  book: Book = new Book();
  valid = true;
  errorMsg: any;

  private url = "http://localhost:8080/api/book";

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) {}

  deleteBook(livro: Book){

    this.book.category = livro.category;
    this.book.id = livro.id;
    this.book.img = livro.img;
    this.book.name = livro.name;
    this.book.price = livro.price;
    this.book.quantity = livro.quantity;

    let deleteUrl = this.url + "/deleteById/" + this.book.id;

    this.http.delete(deleteUrl).subscribe({
      next: () => {console.log(), this.valid=true},
      error: (e) => {console.error(e), this.valid = false, this.errorMsg = e.message},
      complete: () => console.info('livro deletado')
    })
  }

  updateBook(livro: Book){
    console.log("updatebook ok");
    console.log(livro);

    let updateUrl = this.url + "/updateBook";

    this.http.put(updateUrl, livro).subscribe({
      next: () => {console.log(), this.valid=true},
      error: (e) => {console.error(e), this.valid = false, this.errorMsg = e.message},
      complete: () => console.info('livro modificado')
    })

  }

}
