import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-set-game-card',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './set-game-card.html',
  styleUrl: './set-game-card.css',
})
export class SetGameCard {

  setting:boolean = true;

  // Players var
  name:string='';
  players:string[]=[];
  adding:boolean = false;


  startGame(){
    this.setting =! this.setting;
  }

  // Players logic

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
