import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getDitto(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  }
}
