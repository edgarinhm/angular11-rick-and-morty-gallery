import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../../../core/interfaces/character.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  character: Character;

  constructor(private router: Router) {
    this.character = JSON.parse(localStorage.getItem('character-detail'));
  }
  return(): void {
    this.router.navigate(['/']);
  }

}
