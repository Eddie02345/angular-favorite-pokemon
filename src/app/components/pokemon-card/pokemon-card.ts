import { Component, computed, input } from '@angular/core';
import { Pokemon } from '../../models';

const TYPE_COLORS: Record<string, string> = {
  Fire: 'var(--peach)',      Water: 'var(--blue)',      Grass: 'var(--green)',
  Electric: 'var(--yellow)', Psychic: 'var(--pink)',    Ghost: 'var(--mauve)',
  Poison: 'var(--mauve)',    Normal: 'var(--overlay1)', Flying: 'var(--sky)',
  Dark: 'var(--surface2)',   Rock: 'var(--rosewater)',  Ground: 'var(--maroon)',
  Bug: 'var(--teal)',        Steel: 'var(--subtext0)',  Fighting: 'var(--red)',
  Fairy: 'var(--flamingo)',  Dragon: 'var(--lavender)',
};

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css',
})
export class PokemonCard {
  pokemon = input.required<Pokemon>();

  accent = computed(() => {
    const primary = this.pokemon().type.split('/')[0];
    return TYPE_COLORS[primary] ?? 'var(--lavender)';
  });
}