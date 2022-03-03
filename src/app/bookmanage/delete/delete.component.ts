import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookServiceService} from "../../service/book.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id!: number;
  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.Detail()
    });
  }

  ngOnInit(): void {

  }

  book : Book = new Book(0,'','' ,'');

  Detail() {
    this.bookService.findById(this.id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }

  delete() {
    this.bookService.delete(this.id).subscribe(() => {
      alert("Delete Success!");
      this.router.navigate(['/book/book-list']);
    })
  }
}
