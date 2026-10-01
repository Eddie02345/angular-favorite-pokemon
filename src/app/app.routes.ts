import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Region } from './pages/region/region';
import { Pokemart } from './pages/pokemart/pokemart';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'region/:region', component: Region },
  { path: 'pokemart', component: Pokemart },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' },
];