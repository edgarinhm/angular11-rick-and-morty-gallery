import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Rick and Morty App';
  public info: any = {pages:0, count:0};

  constructor() { }

  ngOnInit() {

  }

}
