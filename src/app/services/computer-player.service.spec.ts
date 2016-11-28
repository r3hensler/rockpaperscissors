import { ComputerPlayerService } from './computer-player.service';
import { ROCK, PAPER, SCISSORS } from '../models/weapons';

describe('ComputerPlayerService', () => {
    let computerPlayerService: ComputerPlayerService;

    beforeEach(() => {
        computerPlayerService = new ComputerPlayerService();
    });

    it('should allow options to be set', () => {
        let proto = Object.getPrototypeOf(computerPlayerService);
        computerPlayerService.options = ['one', 'two'];
        expect(Object.getOwnPropertyDescriptor(proto, 'options')['set']).toBeDefined();
    });

    it('should provide an answer from the set values', () => {
        let options: string[] = ['one', 'two', 'three', 'four'];
        computerPlayerService.options = options;
        let choice = computerPlayerService.answer;
        console.log('choice', choice);
        expect(options.indexOf(choice) !== -1).toBe(true);
    });
});
