import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PokemartService } from './pokemart.service';
import { PokemonService } from './pokemon.service';
import { RegionId } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  mart = inject(PokemartService);
  pokemon = inject(PokemonService);
  regions: RegionId[] = ['kanto', 'johto', 'hoenn'];
}