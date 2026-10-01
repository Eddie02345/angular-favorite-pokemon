import { Injectable, signal, computed } from '@angular/core';
import { CartLine, MartItem } from './models';

@Injectable({ providedIn: 'root' })
export class PokemartService {
  readonly items = signal<MartItem[]>([
    { id: 1,  name: 'Poké Ball',    price: 200,  emoji: '🔴' },
    { id: 2,  name: 'Great Ball',   price: 600,  emoji: '🔵' },
    { id: 3,  name: 'Ultra Ball',   price: 800,  emoji: '🟡' },
    { id: 4,  name: 'Potion',       price: 300,  emoji: '🧪' },
    { id: 5,  name: 'Super Potion', price: 700,  emoji: '💉' },
    { id: 6,  name: 'Revive',       price: 1500, emoji: '✨' },
    { id: 7,  name: 'Antidote',     price: 100,  emoji: '💊' },
    { id: 8,  name: 'Repel',        price: 350,  emoji: '🚫' },
    { id: 9,  name: 'Escape Rope',  price: 550,  emoji: '🪢' },
    { id: 10, name: 'Full Heal',    price: 600,  emoji: '💚' },
    { id: 11, name: 'Rare Candy',   price: 4800, emoji: '🍬' },
  ]);

  private cart = signal<CartLine[]>([]);
  readonly cartLines = this.cart.asReadonly();

  readonly total = computed(() =>
    this.cart().reduce((sum, l) => sum + l.item.price * l.qty, 0));

  readonly cartCount = computed(() =>
    this.cart().reduce((n, l) => n + l.qty, 0));

  addToCart(item: MartItem) {
    this.cart.update(lines =>
      lines.some(l => l.item.id === item.id)
        ? lines.map(l => l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l)
        : [...lines, { item, qty: 1 }]
    );
  }

  removeFromCart(id: number) {
    this.cart.update(lines => lines.filter(l => l.item.id !== id));
  }

  clearCart() {
    this.cart.set([]);
  }
}