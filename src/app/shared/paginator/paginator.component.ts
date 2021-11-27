import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() info: any = null;
  @Output() infoChange: EventEmitter<any> = new EventEmitter();

  public pages: any[] = [];
  public currentPage = 1;

  constructor() {/** */}

  ngOnInit(): void {
    /** */
  }

}
