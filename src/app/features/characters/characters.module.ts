import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './pages/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharacterComponent,
    SearchComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
