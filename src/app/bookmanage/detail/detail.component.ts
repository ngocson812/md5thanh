import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: number;
  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.Detail()
    });
  }

  ngOnInit(): void {
  }

  book : Book = new Book(0, '','' ,'');

  Detail() {
    this.bookService.findById(this.id).subscribe(data => {
      this.book = data
      console.log(this.book)
    })
  }
}
