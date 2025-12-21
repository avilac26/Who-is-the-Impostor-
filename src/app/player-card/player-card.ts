import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-player-card',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  @Input() player!: string;
  @Input() role!: string;
  @Input() randomWord!: string[];
}