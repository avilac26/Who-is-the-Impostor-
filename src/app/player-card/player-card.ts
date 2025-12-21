import { Component } from '@angular/core';
import { Input } from '@angular/core';



@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard {
  @Input() player!: string;
  @Input() role!: string;
  @Input() randomWord!: string[];
}