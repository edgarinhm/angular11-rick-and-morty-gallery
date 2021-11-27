import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPayload } from '../models/api.model';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private BASE_URL = 'https://rickandmortyapi.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  characters(page: number = 1, name: string = ''): Observable<ApiPayload<any>> {
    return this.http.get<ApiPayload<any>>(this.BASE_URL + `character?page=${page}&name=${name}`, {});
  }

  characterById(id: string = ''): Observable<Character> {
    return this.http.get<Character>(this.BASE_URL + `character/${id}`, {});
  }
}
