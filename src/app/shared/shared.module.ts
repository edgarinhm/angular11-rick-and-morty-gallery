import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    PaginatorComponent
  ]
})
export class SharedModule { }
