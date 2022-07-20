import { CreateComponent } from './components/create/create.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { BookService } from './components/bookstore-app/product-list/product-list.component.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateService } from './components/create/create.service';
import { DetailsComponent } from './components/bookstore-app/details/details.component';
import { DetailsItemComponent } from './components/bookstore-app/details/details-item/details-item.component';
import { Book } from './components/bookstore-app/product-list/model/book';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    BookstoreAppComponent,
    ProductItemComponent,
    CreateComponent,
    DetailsComponent,
    DetailsItemComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [BookService, CreateService, CreateComponent, DetailsComponent, DetailsItemComponent, Book, ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
