import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemartService } from '../../pokemart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  mart = inject(PokemartService);
}