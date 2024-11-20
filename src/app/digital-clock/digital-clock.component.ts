import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [],
  template: `
    <h2>Digital Clock</h2>
    {{ systemTime }}

    <div class="container"></div>
  `,
  styles: `
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
