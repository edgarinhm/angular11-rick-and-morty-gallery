import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './pages/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterService } from 'src/app/core/services/character.service';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule,
  ],
  exports: [
    CharactersComponent,
    CharacterComponent,
    SearchComponent,
  ],
  providers: [
    CharacterService
  ],
})
export class CharactersModule { }
