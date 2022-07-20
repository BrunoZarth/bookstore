import { FormControl, FormGroup } from '@angular/forms';
import { Book } from './../model/book';
import { Component, Input, OnInit } from '@angular/core';
import { DetailsComponent } from '../../details/details.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: Book;

  @Input()
  static livroArmazenado: Book;

  constructor() {
  }

  ngOnInit(): void {
  }

  salvaLivro(name:any){
    console.log("livro salvo: " + name.name)
    DetailsComponent.livro = name;

  }

  retornaLivro(){
    return ProductItemComponent.livroArmazenado;
  }

}
