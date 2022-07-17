import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private _http: HttpClient) {
  }

  buscarPokemon(search: number|string|null = null): Observable<any[]> {
    return this._http.get<any[]>(EndPoint.getPokemonByIdOrName.replace('id_or_name', search+''));
  }
}


enum EndPoint {
  getPokemonByIdOrName = "https://pokeapi.co/api/v2/pokemon/id_or_name/",

}