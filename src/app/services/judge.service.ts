import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../models/player';

@Injectable()
export class JudgeService {
  private players: any[] = [];
  private winner: string;
  private result: string;

  private player$ = new Subject<Player>();

  constructor() {
    this.player$
      .take(2)
      .scan((existingPlayers, newPlayer) => {
        return [...existingPlayers, newPlayer];
      }, [])
      .subscribe((playerList: Player[]) => {
        this.players = playerList;
      });
  }

  get playerList(): Player[] {
    return this.players;
  }

  play(player: Player) {
    this.player$.next(player);
  }

  determineWinner(playerList: Player[]): string {
    let playerA: Player = playerList[0];
    let playerB: Player = playerList[1];

    switch(playerA.weapon) {
      case 'rock':
        if (playerB.weapon === 'rock') {
          return 'Draw. Both players picked ' + playerA.weapon + '.';
        } else if (playerB.weapon === 'paper') {
          return playerB.name + ' wins. ' + playerB.weapon + ' covers ' + playerA.weapon + '.';
        } else if (playerB.weapon === 'scissors') {
          return playerA.name + ' wins. ' + playerA.weapon + ' smashes ' + playerB.weapon + '.';
        }
        return 'there was an error';
      case 'paper':
        if (playerB.weapon === 'rock') {
          return playerA.name + ' wins. ' + playerA.weapon + ' covers ' + playerB.weapon + '.';
        } else if (playerB.weapon === 'paper') {
          return 'Draw. Both players picked ' + playerA.weapon + '.';
        } else if (playerB.weapon === 'scissors') {
          return playerB.name + ' wins. ' + playerB.weapon + ' cut ' + playerA.weapon + '.';
        }
        return 'there was an error';
      case 'scissors':
        if (playerB.weapon === 'rock') {
          return playerB.name + ' wins. ' + playerB.weapon + ' smashes ' + playerB.weapon + '.';
        } else if (playerB.weapon === 'paper') {
          return playerA.name + ' wins. ' + playerA.weapon + ' cut ' + playerB.weapon + '.';
        } else if (playerB.weapon === 'scissors') {
          return 'Draw. Both players picked ' + playerA.weapon + '.';
        }
        return 'there was an error';
      default:
        return 'there was an error';
    }
  }
}
