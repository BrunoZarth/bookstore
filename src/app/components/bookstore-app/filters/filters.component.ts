import { FormGroup, FormControl } from '@angular/forms';
import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../product-list/product-list.component.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  formFilter!: FormGroup;
  name: string;
  preco: Number;
  categoria: Number;

  constructor(private bookService: BookService ) {
    this.name = "";
    this.preco = new Number();
    this.categoria = new Number();
  }


  ngOnInit(): void {
    this.formFilter = new FormGroup({
      name: new FormControl(this.name),
      preco: new FormControl(this.preco),
      categoria: new FormControl(this.categoria)
    })
  }

  createFilter(){
    this.formFilter = new FormGroup({
      name: new FormControl(this.name),
      preco: new FormControl(this.preco),
      categoria: new FormControl(this.categoria)
    })
  }

  buscar(tipo: String){

    this.createFilter;
    var setLivros = new Set<Object>();

    if(!(this.formFilter.value.name == null) && tipo == 'nome'){
    ProductListComponent.livros = this.bookService.getBookByName(this.formFilter.value.name).subscribe((data => {
      console.log(Object.values(data)[0])
      if(Object.values(data)[0] !== undefined)
      setLivros.add(Object.values(data)[0])
      ProductListComponent.livros = setLivros;
    }))}

    if(!(this.formFilter.value.categoria == null) && tipo == 'categoria'){
    ProductListComponent.livros = this.bookService.getBookByCategory(this.formFilter.value.categoria).subscribe((data => {
      console.log(Object.values(data))
      Object.values(data).forEach(element => {
        setLivros.add(element)
      });
      //setLivros.add(Object.values(data))
      ProductListComponent.livros = setLivros;
      console.log(setLivros)
    }))}

    if(!(this.formFilter.value.preco == null) && tipo == 'preco'){
      ProductListComponent.livros = this.bookService.getBookByPrice(this.formFilter.value.preco).subscribe((data => {
        console.log(Object.values(data))
      Object.values(data).forEach(element => {
        setLivros.add(element)
      });
      //setLivros.add(Object.values(data))
      ProductListComponent.livros = setLivros;
      console.log(setLivros)
      }))}

    if(setLivros.size == 0){
      ProductListComponent.livros = setLivros;
    }
  }


}



