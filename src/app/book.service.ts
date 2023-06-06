import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
// import {of} 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private BOOKS: Book[] = [
    {id: 100, name: 'Angular 17', price: 2000, description: 'Angular learning krna hai'},
    {id: 101, name: 'Angular 14', price: 2020, description: 'Angular learning krna hai'},
    {id: 102, name: 'Angular 16', price: 2030, description: 'Angular learning'},
    {id: 103, name: 'Angular 11', price: 2050, description: 'Angular learning 2032'},
    {id: 104, name: 'Angular 13', price: 2033, description: 'Angular learning krna hai'},
  ];
  constructor() { }

  getBooks():Observable<Book[]>{
    return of(this.BOOKS);
    // return Observable.of(this.BOOKS);
  }
} 
