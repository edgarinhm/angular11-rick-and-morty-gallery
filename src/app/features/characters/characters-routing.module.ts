import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailsComponent } from './components/details/details.component';

const rutas: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: 'character',
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
    ]
  },
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
