import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    PaginatorComponent
  ]
})
export class SharedModule { }
