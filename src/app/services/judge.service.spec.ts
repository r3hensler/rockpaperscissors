/* tslint:disable:no-unused-variable */

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
});
