import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './components/details/details.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
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
