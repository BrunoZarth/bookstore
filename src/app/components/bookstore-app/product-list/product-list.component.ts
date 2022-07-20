import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookService : BookService;
  static livros: any;

  constructor( bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {

    ProductListComponent.livros = this.bookService.getBooks().subscribe((data => {
      ProductListComponent.livros = data;
      console.log(ProductListComponent.livros);
      console.log(ProductListComponent.livros.content);
      ProductListComponent.livros = ProductListComponent.livros.content;
    }))
  }

  getBookByName(name: string){
    ProductListComponent.livros = this.bookService.getBookByName(name).subscribe((data => {
      ProductListComponent.livros = data;
      console.log(ProductListComponent.livros);
      console.log(ProductListComponent.livros.content);
      ProductListComponent.livros = ProductListComponent.livros.content;
    }))
  }

  getLivros(){
    return ProductListComponent.livros;
  }

}
