import { Component } from '@angular/core';
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
      this.characters = (response.results);
      console.log('this.concat', this.characters);
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x, i) => i);
    });
  }

  search(q, index): void {
    this.currentPage = index + 1;
    this.getCharacters(this.currentPage, q);
  }

}
