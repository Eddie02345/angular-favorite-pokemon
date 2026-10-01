import { Injectable, signal } from '@angular/core';
import { Pokemon, Region } from './models';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemon = signal<Record<Region, Pokemon[]>>({
    kanto: [
      { name: 'Charizard', type: 'Fire/Flying', heldItem: 'Charcoal', emoji: '🔥',
        description: 'Breathes fire hot enough to melt boulders.' },
      { name: 'Gengar', type: 'Ghost/Poison', heldItem: 'Spell Tag', emoji: '👻',
        description: 'Hides in shadows and mimics people for fun.' },
      { name: 'Alakazam', type: 'Psychic', heldItem: 'Twisted Spoon', emoji: '🥄',
        description: 'Has an IQ of around 5000 and remembers everything.' },
      { name: 'Gyarados', type: 'Water/Flying', heldItem: 'Mystic Water', emoji: '🐉',
        description: 'Furious sea serpent that destroys everything in its rage.' },
      { name: 'Snorlax', type: 'Normal', heldItem: 'Leftovers', emoji: '😴',
        description: 'Eats and sleeps all day, blocking roads while napping.' },
      { name: 'Pikachu', type: 'Electric', heldItem: 'Light Ball', emoji: '⚡',
        description: 'Stores electricity in its cheeks and zaps when angry.' },
    ],
    johto: [
      { name: 'Typhlosion', type: 'Fire', heldItem: 'Charcoal', emoji: '🌋',
        description: 'Erupts flames from its back when it is angry.' },
      { name: 'Umbreon', type: 'Dark', heldItem: 'Black Glasses', emoji: '🌙',
        description: 'Its rings glow in the dark when it is excited.' },
      { name: 'Scizor', type: 'Bug/Steel', heldItem: 'Metal Coat', emoji: '🦂',
        description: 'Its steel pincers can crush thick iron plates.' },
      { name: 'Tyranitar', type: 'Rock/Dark', heldItem: 'Choice Band', emoji: '🦖',
        description: 'So strong it can flatten mountains when it rampages.' },
      { name: 'Lugia', type: 'Psychic/Flying', heldItem: 'Silver Wing', emoji: '🌊',
        description: 'Guardian of the seas that sleeps at the ocean floor.' },
      { name: 'Togepi', type: 'Fairy', heldItem: 'Lucky Egg', emoji: '🥚',
        description: 'Stores up happiness and shares it with kind people.' },
    ],
    hoenn: [
      { name: 'Blaziken', type: 'Fire/Fighting', heldItem: 'Blazikenite', emoji: '🥋',
        description: 'Its powerful kicks can leap over buildings.' },
      { name: 'Gardevoir', type: 'Psychic/Fairy', heldItem: 'Twisted Spoon', emoji: '💃',
        description: 'Will protect its Trainer with all of its psychic power.' },
      { name: 'Salamence', type: 'Dragon/Flying', heldItem: 'Dragon Fang', emoji: '🐲',
        description: 'Fulfilled its dream of flying and became a mighty dragon.' },
      { name: 'Swampert', type: 'Water/Ground', heldItem: 'Mystic Water', emoji: '💪',
        description: 'Can lift boulders and swim faster than a jet boat.' },
      { name: 'Rayquaza', type: 'Dragon/Flying', heldItem: 'Dragon Scale', emoji: '☄️',
        description: 'Lives in the ozone layer and never lands on the ground.' },
      { name: 'Mudkip', type: 'Water', heldItem: 'Oran Berry', emoji: '💧',
        description: 'Its fin senses vibrations in the water and air.' },
    ],
  });

  getByRegion(region: Region): Pokemon[] {
    return this.pokemon()[region] ?? [];
  }
}