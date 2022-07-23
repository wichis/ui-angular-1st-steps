import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/app/shared/apiary/pokemon-api.service';

@Component({
  selector: 'app-async-calls',
  templateUrl: './async-calls.component.html',
  styleUrls: ['./async-calls.component.css']
})
export class AsyncCallsComponent implements OnInit {
  pokemones: any[] | undefined;
  searchText: string | number | null = null;
  pokemonFound: any | null = null;
  imageLoaded: HTMLImageElement | null = null;

  constructor(private _pokemonApi: PokemonApiService) { }

  ngOnInit(): void {
  }

  buscar() {
    setTimeout(() => {
      this._pokemonApi.buscarPokemon(this.searchText).subscribe(data => {
        this.pokemonFound = data;
      });
    }, 3000);

    this._pokemonApi.cargarImgPokemon(this.searchText).subscribe(data => {
      this.imageLoaded = data;
    });
  }


}
