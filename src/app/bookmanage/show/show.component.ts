import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookServiceService} from "../../service/book.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  bookList: Book[] = [];

  constructor(private bookService: BookServiceService) {
    this.findAll();
  }

  ngOnInit(): void {
  }

  findAll() {
    this.bookService.findAll().subscribe(data => {
      this.bookList = data;
    })
  }
}
