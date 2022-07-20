import { DetailsItemService } from './details-item.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../product-list/model/book';
import { DetailsComponent } from '../details.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {

  @Input()
  livro!: Book;

  formDetails!: FormGroup;

  constructor(private detailsItemService:DetailsItemService) {this.createForm(new Book()); }

  ngOnInit() {
    this.createForm(new Book());
  }

  createForm(book: Book){
    this.formDetails = new FormGroup({
      name: new FormControl(book.name ),
      price: new FormControl(book.price, [Validators.pattern('[1-9]*')]),
      quantity: new FormControl(book.quantity, [Validators.pattern('[1-9]*')]),
      category: new FormControl(book.category, [Validators.pattern('[1-9]*')]),
      img: new FormControl(book.img)
    })
  }

  salvaLivro(livro:any){
    console.log("livro salvo: " + livro.name)
    DetailsComponent.livro = livro;

  }

  deletaLivro(livro:Book){
    this.detailsItemService.deleteBook(livro);
    DetailsComponent.livro = new Book();
    window.location.reload();
  }

  atualizaLivro(){
    if(!this.formDetails.valid){
      return
    }
    console.log("atualiza livro ok");
    console.log(this.formDetails.value)


    this.detailsItemService.updateBook(this.getFormTratado(this.formDetails.value))
    this.formDetails.reset();
    window.location.reload();
  }

  getFormTratado(livro: Book): Book {
    livro.id = this.livro.id;
    if(livro.name == null || livro.name.trim() === "" || livro.name === undefined){livro.name = this.livro.name;}
    if(livro.category == null || livro.category.trim() === ""){livro.category = this.livro.category;}
    if(livro.img == null || livro.img.trim() === ""){livro.img = this.livro.img;}
    if(livro.quantity == null || livro.quantity == 0){livro.quantity = this.livro.quantity;}
    if(livro.price == null || livro.price == 0){livro.price = this.livro.price;}
    return livro;
  }

}
