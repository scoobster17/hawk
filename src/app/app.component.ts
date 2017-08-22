import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hawk Timer';
  description = 'Multi-split timer so you can track your time, whether it be for your your own use, for your timesheets, interest, or if someone is watching you like a hawk!';
  callToActions = {
    startTimer: 'Start a timer'
  }
}
