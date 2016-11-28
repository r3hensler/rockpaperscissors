import { Component } from '@angular/core';
import { Player } from './models/player';
import { JudgeService } from './services/judge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  playerName: string;
  result: string;
  title = 'Play Rock - Paper - Scissors!';

  constructor(private judgeService: JudgeService) { }

  newGame(evt: Event, weapon: string) {
    evt.preventDefault();
    let player: Player = Object.assign({},
      {name: this.playerName, weapon: weapon});
    this.judgeService.play(player);
    this.judgeService.playComputer();
    this.result = this.judgeService.determineWinner();
  }
}
