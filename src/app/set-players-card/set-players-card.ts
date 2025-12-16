import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-players-card',
  imports: [FormsModule],
  templateUrl: './set-players-card.html',
  styleUrl: './set-players-card.css',
})
export class SetPlayersCard {

  name:string='';
  players:string[]=[];
  adding:boolean = false;

  ngOnInit() {
    const savedPlayers = localStorage.getItem('players');
    if (savedPlayers) {
      this.players = JSON.parse(savedPlayers);
    }
  }

  add(){
    this.adding =! this.adding;
  }
  addPlayer(){
    this.players.push(this.name);
    localStorage.setItem('players', JSON.stringify(this.players));
    this.name = '';
    this.adding =! this.adding;
  }
  deletePlayer(player:string){
    let index = this.players.indexOf(player);
    this.players.splice(index, 1);
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
