import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [],
  template: `
    <div class="digital-clock">
      <h2>Digital Clock</h2>
      <div class="time">{{ systemTime }}</div>
    </div>
  `,
  styles: `
@font-face { 
  font-family: 'digitalFont'; 
  src: url('../assets/DS-DIGI.TTF') format('truetype');
}


  .digital-clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2b2b2b;
  color: #f0f0f0;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
}

.time {
  font-size: 4em;
  font-family: 'digitalFont', Courier, monospace;
}
`,
})
export class DigitalClockComponent {
  systemTime: string = '';
  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.timeService.systemTime$.subscribe((time) => {
      this.systemTime = time;
    });
  }
}
