import { Component } from '@angular/core';
import { JudgeService } from './services/judge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Play Rock - Paper - Scissors!';

  constructor(private judgeService: JudgeService) { }

}
