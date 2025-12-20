import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerCard } from '../player-card/player-card';
import _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-set-game-card',
  imports: [RouterLink, RouterLinkActive, FormsModule, PlayerCard, NgClass],
  templateUrl: './set-game-card.html',
  styleUrl: './set-game-card.css',
})
export class SetGameCard {

  setting:boolean = true;

  // Players var
  name:string='';
  players:string[]=[];
  adding:boolean = false;

  //Player card index
  currentIndex: number = 0;


  // Impostors and members
  impostors:number=1;
  roles:string[]=[];
  shuffledRoles: string[]=[];

  // Random word
  randomWord:any=null;

  constructor(private api: HttpClient) {}

  startGame(){
    this.setImpostorsMembers();
    this.shuffleRoles();
    this.getData();
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

  nextPlayer(){
    if(this.currentIndex < this.players.length -1){
      this.currentIndex = this.currentIndex + 1;
    }
    }

  prevPlayer() {
    if(this.currentIndex > 0){
      this.currentIndex = this.currentIndex - 1;
    }
  }

  setImpostorsMembers(){
      for (let i =0; i < this.impostors; i++){
        this.roles.push("Impostor");
      }
      for (let i =0; i < this.players.length - this.impostors; i++){
        this.roles.push("Tripulante");
      }
    }
  
    shuffleRoles(){
      this.shuffledRoles = _.shuffle(this.roles);
    }

    getData(){
    this.api.get("https://random-word-api.herokuapp.com/word?lang=es").subscribe((data:any)=>{
    this.randomWord=data;
    })
  }

}


