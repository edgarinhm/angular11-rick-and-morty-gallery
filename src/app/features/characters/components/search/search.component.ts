import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() getCharactersEmitter: EventEmitter<string> = new EventEmitter();


  search(q, n): void {
    this.getCharactersEmitter.emit(q);
  }

}
