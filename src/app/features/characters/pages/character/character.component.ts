import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characters: any[] = [];
  @Input() info: any = null;
  @Output() infoChange: EventEmitter<any> = new EventEmitter();
  public pages: any[] = [];
  public currentPage: number = 1;

  constructor(private characterService: CharacterService, private router: Router ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1, name: string = ''): void {
    this.characterService.characters(page, name).subscribe(response => {
      this.characters = response.results
      this.infoChange.emit(response.info);
      this.pages = Array(this.info.pages).map((x, i) => i);
    })
  }

  search(q, n): void {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, q);
  }

  showDetails(character: Character): void {
    localStorage.setItem('character-detail', JSON.stringify(character));
    this.router.navigate(['/character/details']);
  }

}
