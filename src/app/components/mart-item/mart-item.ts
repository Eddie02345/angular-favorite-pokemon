import { Component, computed, input, output } from '@angular/core';
import { MartItem as MartItemModel } from '../../models';

@Component({
  selector: 'app-mart-item',
  templateUrl: './mart-item.html',
  styleUrl: './mart-item.css',
})
export class MartItem {
  item = input.required<MartItemModel>();
  add = output<MartItemModel>();
image = computed(() =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.item().sprite}.png`);
}