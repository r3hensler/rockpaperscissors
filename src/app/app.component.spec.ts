/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComputerPlayerService } from './services/computer-player.service';
import { JudgeService } from './services/judge.service';

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

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Play Rock - Paper - Scissors!'`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Play Rock - Paper - Scissors!');
    }));

    it('should render title in a h1 tag', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Play Rock - Paper - Scissors!');
    }));
});
