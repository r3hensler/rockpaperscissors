import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComputerPlayerService } from './services/computer-player.service';
import { JudgeService } from './services/judge.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ComputerPlayerService,
        JudgeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
