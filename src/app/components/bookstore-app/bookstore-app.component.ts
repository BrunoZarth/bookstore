import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  retornaLivro(){
    return ProductItemComponent.livroArmazenado;
  }

}
