import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  myAllBooks: Book[]=[];
  constructor(private _bookService:BookService){

  }

  ngOnInit():void {}

  getAllBooks(){
    this._bookService.getBooks().subscribe(resp=>this.myAllBooks=resp)
  }
}
