import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() characters: any[] = [];
  @Input() info: any = null;
  @Output() infoChange: EventEmitter<any> = new EventEmitter();
  @Input() pages: any[] = [];
  @Output() pagesChange: EventEmitter<any> = new EventEmitter();
  @Input() currentPage = 1;
  @Output() charactersChange: EventEmitter<any> = new EventEmitter();
  @Output() currentPageChange: EventEmitter<any> = new EventEmitter();

  scrollBarOffset = false;

  constructor(private characterService: CharacterService, private router: Router ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1, name: string = ''): void {
    this.characterService.characters(page, name).subscribe(response => {

      this.characters = this.scrollBarOffset ? this.characters.concat(response.results) :
      response.results;

      this.charactersChange.emit(this.characters);
      this.info = response.info;
      this.infoChange.emit(response.info);
      this.pages = Array(this.info.pages).map((x, i) => i);
      this.pagesChange.emit(this.pages);
    });
  }

  search(q, n): void {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, q);
  }

  showDetails(character: Character): void {
    localStorage.setItem('character-detail', JSON.stringify(character));
    this.router.navigate(['/character/details']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll($event: Event): void {
    const pageYOffset = window.pageYOffset;
    const documentElementScrollTop = document.documentElement.scrollTop;
    const documentBodyScrollTop  = document.body.scrollTop;
    const pageYOffsetHeight  = window.document.body.clientHeight - window.innerHeight;
    if ( (pageYOffset >= pageYOffsetHeight ||
      documentElementScrollTop >= pageYOffsetHeight ||
      documentBodyScrollTop >= pageYOffsetHeight) &&
      this.currentPage < this.info.pages
      ){
        this.currentPage = this.currentPage + 1;
        this.getCharacters(this.currentPage);
        this.scrollBarOffset = true;
        this.currentPageChange.emit(this.currentPage);
    }else{
      this.scrollBarOffset = false;
    }
    console.log('internal window pageYOffset: ', pageYOffset,
    'internal documentElementScrollTop', documentElementScrollTop,
    'internal documentBodyScrollTop', documentBodyScrollTop,
    'internal $event', $event,
    'internal window', window,
    'internal window innerHeight', window.innerHeight,
    'internal window body clientheight', window.document.body.clientHeight,
    'pageYOffsetHeight', pageYOffsetHeight,
    'OnScroll', (pageYOffset >= pageYOffsetHeight),
    'this.characters', this.characters
    );

  }

}
