import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";
import { Observable } from "rxjs";

@Injectable()

export class BookService
{
  private url = "http://localhost:8080/api/book";
  private filters = "";
  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http:HttpClient){}

  getBooks(){
    return this.http.get(this.url)
  }

  getBookByName(name: string){
    let urlBusca = this.url.concat("/name/" + name);
    let objeto = this.http.get(urlBusca)
    return objeto
  }

  getBookByCategory(category: string){
    let urlBusca = this.url.concat("/category/" + category);
    let objeto = this.http.get(urlBusca)
    return objeto
  }

  getBookByPrice(price: string){
    let urlBusca = this.url.concat("/price/" + price);
    let objeto = this.http.get(urlBusca)
    return objeto
  }

  addFilter(filter: string){

    this.filters = this.filters.concat(filter);
  }
}
