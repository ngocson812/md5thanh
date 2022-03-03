import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {ShowComponent} from "./show/show.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  { path: 'tour-list', component: ShowComponent },
  { path: 'tour-create', component: CreateComponent },
  { path: 'tour-update/:id', component: EditComponent },
  { path: 'tour-delete/:id', component: DeleteComponent },
  { path: 'tour-detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookRoutingModule{ }
