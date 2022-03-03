import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookServiceService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book : Book = new Book(0, '','' ,'');

  id!: number;
  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute,  private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.Detail();
    });
  }

  ngOnInit(): void {

  }

  Detail() {
    this.bookService.findById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }

  edit() {
    this.bookService.update(this.book).subscribe(() => {
      alert('Update Success!');
      this.router.navigate(['/book/book-list'])
    })
  }
}
