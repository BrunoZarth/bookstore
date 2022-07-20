import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateService } from './create.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../bookstore-app/product-list/model/book';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formBook!: FormGroup;

  constructor(public createService: CreateService, public formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.createForm(new Book());
  }

  addBook(){
    if(!this.formBook.valid){
      return
    }
    this.createService.addBook(this.formBook.value)

    console.log(this.formBook.value)

    this.formBook.reset();
  }

  createForm(book: Book){
    this.formBook = new FormGroup({
      name: new FormControl(book.name, [Validators.required]),
      price: new FormControl(book.price, [Validators.required]),
      quantity: new FormControl(book.quantity, [Validators.required]),
      category: new FormControl(book.category, [Validators.required]),
      img: new FormControl(book.img, [Validators.required])
    })
  }

  get name(){
    return this.formBook.get('name')!;
  }

  get price(){
    return this.formBook.get('price')!;
  }

  get quantity(){
    return this.formBook.get('quantity')!;
  }

  get category(){
    return this.formBook.get('category')!;
  }

  get img(){
    return this.formBook.get('img')!;
  }

}
