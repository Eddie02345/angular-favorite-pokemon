export type RegionId = 'johto' | 'kanto' | 'hoenn';

export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;
  emoji: string;
}

export interface MartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
}

export interface CartLine {
  item: MartItem;
  qty: number;
}