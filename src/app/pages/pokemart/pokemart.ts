import { Component, inject } from '@angular/core';
import { PokemartService } from '../../pokemart.service';
import { MartItem } from '../../components/mart-item/mart-item';

@Component({
  selector: 'app-pokemart',
  imports: [MartItem],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css',
})
export class Pokemart {
  mart = inject(PokemartService);
}