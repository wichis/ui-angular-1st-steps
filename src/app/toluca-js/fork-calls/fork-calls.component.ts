import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonApiService } from 'src/app/shared/apiary/pokemon-api.service';

@Component({
  selector: 'app-fork-calls',
  templateUrl: './fork-calls.component.html',
  styleUrls: ['./fork-calls.component.css']
})
export class ForkCallsComponent implements OnInit {

  pokemones: any[] | undefined;
  searchText: string | number | null = null;
  pokemonFound: any | null = null;
  imageLoaded: HTMLImageElement | null = null;

  constructor(private _pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
  }

  buscar() {
    const joined = forkJoin({
      pokemonData: this._pokemonApi.buscarPokemon(this.searchText),
      pokemonImg: this._pokemonApi.cargarImgPokemon(this.searchText)
    }
    );

    joined.subscribe(({ pokemonData, pokemonImg }) => {
      this.pokemonFound = pokemonData;
      this.imageLoaded = pokemonImg;
    });

  }

}
