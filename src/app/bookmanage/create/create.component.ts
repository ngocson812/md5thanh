import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BookServiceService} from "../../service/book.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  tourList!: Book[];
  formCreate!:FormGroup;

  book: Book = new Book(0, '','' ,'');

  constructor(private bookService: BookServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      name: new FormControl('', Validators.maxLength(6)),
      author: new FormControl('', Validators.maxLength(6)),
      description: new FormControl("",Validators.required),
    })
  }

  create() {
    this.bookService.create(this.formCreate.value).subscribe(() => {
      alert("Create Success!")
      this.router.navigate(['/book/book-list'])
    })
  }
}

