import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable()
export class JudgeService {
  private players: any[];

  constructor() {
    this.players = [];
  }

  get playerList() {
    return this.players;
  }

  play(player: Player) {
    if (this.players.length < 2) {
      this.players.push(player);
    }
  }

}
