import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private _http: HttpClient) {
  }

  buscarPokemon(search: number | string | null = null): Observable<any[]> {
    return this._http.get<any[]>(EndPoint.getPokemonByIdOrName.replace('id_or_name', search + ''));
  }

  cargarImgPokemon(search: number | string | null = null): Observable<HTMLImageElement> {
    return new Observable(subscriber => {
      const image = new Image();
      image.src = EndPoint.getPokemonImageById.replace('id_or_name', search + '');

      image.onload = () => {
        subscriber.next(image);
        subscriber.complete();
      };
    });
  }
}


enum EndPoint {
  getPokemonByIdOrName = "https://pokedex-tolucajs.herokuapp.com/pokemon/id_or_name",
  getPokemonImageById = "https://pokedex-tolucajs.herokuapp.com/pokemon/id_or_name/picture"
}