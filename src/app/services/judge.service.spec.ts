/* tslint:disable:no-unused-variable */

import { Subject } from 'rxjs';
import { JudgeService } from './judge.service';
import { Player } from '../models/player';

const playerA: Player = { name: 'player a', weapon: 'rock'};
const playerB: Player = { name: 'player b', weapon: 'scissors'};
const playerC: Player = { name: 'player c', weapon: 'paper'};

describe('JudgeService', () => {
  let judgeService: JudgeService;

  beforeEach(() => {
    judgeService = new JudgeService();
  });

  it('should have a play method', () => {
    expect(judgeService.play).toBeDefined();
  });

  it('should add player to list of players when play is called', () => {
    expect (judgeService.playerList).toEqual([]);
    judgeService.play(playerA);
    expect(judgeService.playerList)
      .toEqual([{ name: playerA.name, weapon: playerA.weapon }]);
  });

  it('should add maximum two players when play is called', () => {
    expect (judgeService.playerList).toEqual([]);
    judgeService.play(playerA);
    judgeService.play(playerB);
    judgeService.play(playerC);
    expect(judgeService.playerList.length).toBe(2);
  });

  describe('determine the winner', () => {
    it(('rock vs scissors'), () => {
      judgeService.play(playerA);
      judgeService.play(playerB);
      let result = judgeService.determineWinner(judgeService.playerList);
      expect(result).toBe('player a wins. rock smashes scissors.');
    });

    it(('rock vs paper'), () => {
      judgeService.play(playerA);
      judgeService.play(playerC);
      let result = judgeService.determineWinner(judgeService.playerList);
      expect(result).toBe('player c wins. paper covers rock.');
    });

    it(('scissors vs paper'), () => {
      judgeService.play(playerB);
      judgeService.play(playerC);
      let result = judgeService.determineWinner(judgeService.playerList);
      expect(result).toBe('player b wins. scissors cut paper.');
    });
  });
});
