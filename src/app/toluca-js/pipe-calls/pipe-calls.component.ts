import { Component, OnInit } from '@angular/core';
import { iif, of } from 'rxjs';
import { PokemonApiService } from 'src/app/shared/apiary/pokemon-api.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-calls',
  templateUrl: './pipe-calls.component.html',
  styleUrls: ['./pipe-calls.component.css']
})
export class PipeCallsComponent implements OnInit {

  pokemones: any[] | undefined;
  searchText: string | number | null = null;
  pokemonFound: any | null = null;
  imageLoaded: HTMLImageElement | null = null;

  constructor(private _pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
  }

  buscar() {
    this._pokemonApi.buscarPokemon(this.searchText)
      .pipe(map((pokemonData) => {
        this.pokemonFound = pokemonData;
      }))
      .pipe(mergeMap(v => iif(() => this.pokemonFound != undefined, this._pokemonApi.cargarImgPokemon(this.searchText), of())))
      .subscribe(imgData => {
        if (imgData) this.imageLoaded = imgData;
      });

  }

}
