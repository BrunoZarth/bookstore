import { Component, Inject, Input, OnInit } from '@angular/core';
import { Book } from '../product-list/model/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  static livro: Book = new Book();

  constructor(private livro:Book) {

  }

  ngOnInit() {


  }

  getLivro(): Book{
    return DetailsComponent.livro;
  }

  verificaSeTemLivro(): boolean{
    return DetailsComponent.livro.name !== undefined;
  }
}
