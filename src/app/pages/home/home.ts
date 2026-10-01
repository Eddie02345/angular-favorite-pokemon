import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards = [
    { label: 'Kanto',    emoji: '🗻', color: 'var(--red)',    link: '/region/kanto' },
    { label: 'Johto',    emoji: '🔔', color: 'var(--yellow)', link: '/region/johto' },
    { label: 'Hoenn',    emoji: '🌴', color: 'var(--teal)',   link: '/region/hoenn' },
    { label: 'PokéMart', emoji: '🏪', color: 'var(--mauve)',  link: '/pokemart' },
  ];
}