import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  regions = [
    { id: 'kanto', label: 'Kanto', emoji: '🗻', color: 'var(--red)' },
    { id: 'johto', label: 'Johto', emoji: '🔔', color: 'var(--yellow)' },
    { id: 'hoenn', label: 'Hoenn', emoji: '🌴', color: 'var(--teal)' },
  ];
}