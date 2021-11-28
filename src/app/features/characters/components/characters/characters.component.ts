import { Component, HostListener, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  public title = 'Rick and Morty App';
  public info: any = {pages: 0, count: 0};
  public pages: any[] = [];
  public characters: any[] = [];
  public currentPage = 1;

  constructor(private characterService: CharacterService) {/** */}

  getCharacters(page: number = 1, name: string = ''): void {
    this.characterService.characters(page, name).subscribe(response => {
      this.characters = this.characters.concat(response.results);
      console.log('this.concat', this.characters);
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x, i) => i);
    });
  }

  search(index): void {
    this.currentPage = index + 1;
    this.getCharacters(this.currentPage);
  }

  @HostListener('window:scroll', [])
  doSomethingOnWindowsScroll($event: Event): void {
    const pageYOffset = window.pageYOffset;
    const documentElementScrollTop = document.documentElement.scrollTop;
    const documentBodyScrollTop  = document.body.scrollTop;
    // let scrollOffset = $event.srcElement.children[0].scrollTop;
    console.log('window pageYOffset: ', pageYOffset,
    'documentElementScrollTop', documentElementScrollTop,
    'documentBodyScrollTop', documentBodyScrollTop,
    '$event', $event,
    'window', window
    );
  }

}
