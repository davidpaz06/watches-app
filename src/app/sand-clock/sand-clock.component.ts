import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-sand-clock',
  standalone: true,
  imports: [],
  template: ` <p>sand-clock works!</p> `,
  styles: `
  `,
})
export class SandClockComponent implements OnInit {
  systemTime: string = '';
  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.timeService.systemTime$.subscribe((time) => {
      this.systemTime = time;
    });
  }
}
