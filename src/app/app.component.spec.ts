/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComputerPlayerService } from './services/computer-player.service';
import { JudgeService } from './services/judge.service';
import { ROCK, PAPER, SCISSORS } from './models/weapons';

let fixture: any,
    app: any;

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ComputerPlayerService,
                JudgeService
            ],
            declarations: [
                AppComponent
            ],
        });
    });

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Play Rock - Paper - Scissors!'`, async(() => {
        expect(app.title).toEqual('Play Rock - Paper - Scissors!');
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Play Rock - Paper - Scissors!');
    }));

    it('should add player to game when selecting weapon', () => {
        let weapons: any = [ROCK, PAPER, SCISSORS];
        expect(app.judgeService.playerList.length).toBe(0);
        app.playerName = 'test player';
        app.newGame(new Event('sample event'), ROCK);
        expect(app.judgeService.playerList.length).toBe(2);
        expect(app.judgeService.playerList[0].name).toBe('test player');
        expect(app.judgeService.playerList[0].weapon).toBe(ROCK);
        expect(app.judgeService.playerList[1].name).toBe('Computer');
        let computerWeapon = app.judgeService.playerList[1].weapon;
        expect(weapons.includes(computerWeapon)).toBe(true);
    });
});
