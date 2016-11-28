import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ComputerPlayerService } from './computer-player.service';
import { Player } from '../models/player';
import { ROCK, PAPER, SCISSORS, rockVersus, paperVersus, scissorsVersus } from '../models/weapons';

@Injectable()
export class JudgeService {
    private players: any[] = [];

    private player$ = new Subject<Player>();

    constructor(private computerPlayer: ComputerPlayerService) {
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

        switch (playerA.weapon) {
            case ROCK:
                return rockVersus(playerA, playerB);
            case PAPER:
                return paperVersus(playerA, playerB);
            case SCISSORS:
                return scissorsVersus(playerA, playerB);
            default:
                return 'there was an error';
        }
    }
}
