
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailComponent} from "./detail/detail.component";
import {ShowComponent} from "./show/show.component";
import {BookmanageComponent} from "./bookmanage.component";
import {BookRoutingModule} from "./book-routing.module";

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent,
    ShowComponent,
    BookmanageComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class BookmanageModule{ }
