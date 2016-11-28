import { JudgeService } from './judge.service';
import { Player } from '../models/player';
import { ROCK, PAPER, SCISSORS } from '../models/weapons';

const playerA: Player = { name: 'player a', weapon: ROCK };
const playerB: Player = { name: 'player b', weapon: SCISSORS };
const playerC: Player = { name: 'player c', weapon: PAPER };
const playerD: Player = { name: 'player d', weapon: ROCK };
const playerE: Player = { name: 'player e', weapon: SCISSORS };
const playerF: Player = { name: 'player f', weapon: PAPER };

describe('JudgeService', () => {
    let judgeService: JudgeService;

    beforeEach(() => {
        judgeService = new JudgeService();
    });

    it('should have a play method', () => {
        expect(judgeService.play).toBeDefined();
    });

    it('should add player to list of players when play is called', () => {
        expect(judgeService.playerList).toEqual([]);
        judgeService.play(playerA);
        expect(judgeService.playerList)
            .toEqual([{ name: playerA.name, weapon: playerA.weapon }]);
    });

    it('should add maximum two players when play is called', () => {
        expect(judgeService.playerList).toEqual([]);
        judgeService.play(playerA);
        judgeService.play(playerB);
        judgeService.play(playerC);
        expect(judgeService.playerList.length).toBe(2);
    });

    describe('determine the winner', () => {
        it(('rock vs rock'), () => {
            judgeService.play(playerA);
            judgeService.play(playerD);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('Draw. Both players picked rock.');
        });

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

        it(('scissors vs scissors'), () => {
            judgeService.play(playerB);
            judgeService.play(playerE);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('Draw. Both players picked scissors.');
        });

        it(('scissors vs rock'), () => {
            judgeService.play(playerB);
            judgeService.play(playerA);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('player a wins. rock smashes scissors.');
        });

        it(('scissors vs paper'), () => {
            judgeService.play(playerB);
            judgeService.play(playerC);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('player b wins. scissors cut paper.');
        });

        it(('paper vs paper'), () => {
            judgeService.play(playerC);
            judgeService.play(playerF);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('Draw. Both players picked paper.');
        });

        it(('paper vs rock'), () => {
            judgeService.play(playerC);
            judgeService.play(playerA);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('player c wins. paper covers rock.');
        });

        it(('paper vs scissors'), () => {
            judgeService.play(playerC);
            judgeService.play(playerB);
            let result = judgeService.determineWinner(judgeService.playerList);
            expect(result).toBe('player b wins. scissors cut paper.');
        });
    });
});
