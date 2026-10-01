import { Component, computed, inject, input, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PokemonService } from '../../pokemon.service';
import { Region } from '../../models';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-region',
  imports: [PokemonCard, TitleCasePipe],
  templateUrl: './region.html',
  styleUrl: './region.css',
})
export class RegionComponent {
  region = input.required<Region>();   // filled from the :region URL param
  private svc = inject(PokemonService);

  pokemon = computed(() => this.svc.getByRegion(this.region()));
  selected = signal<string | null>(null);
}