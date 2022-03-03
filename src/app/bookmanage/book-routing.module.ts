import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {ShowComponent} from "./show/show.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  { path: 'book-list', component: ShowComponent },
  { path: 'book-create', component: CreateComponent },
  { path: 'book-update/:id', component: EditComponent },
  { path: 'book-delete/:id', component: DeleteComponent },
  { path: 'book-detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookRoutingModule{ }
