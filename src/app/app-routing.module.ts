
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/characters/characters.module').then( m => m.CharactersModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
