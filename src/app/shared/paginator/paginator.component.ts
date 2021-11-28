import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() info: any = null;
  @Output() infoChange: EventEmitter<any> = new EventEmitter();

  @Input() pages: any[] = [];
  @Input() currentPage = 1;

  @Output() searchEmitter: EventEmitter<any> = new EventEmitter();

  /** Infinite Scroll */
  showScrollHeight = 400;
  hideScrollHeight = 200;
  showGoUpButton = false;

  constructor() {/** */}

  ngOnInit(): void {
    /** */
  }

  search(index): void {
    this.searchEmitter.emit(index);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }


}
