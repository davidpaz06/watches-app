import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';
import { TimeService } from '../../services/time.service';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { ProgressBarClockComponent } from '../progress-bar-clock/progress-bar-clock.component';
import { WordClockComponent } from '../word-clock/word-clock.component';

@Component({
  selector: 'app-random-clock',
  standalone: true,
  imports: [],
  template: `
    <div class="random-clock-container">
      <ng-container #clockContainer></ng-container>
    </div>
  `,
  styles: `
    .random-clock-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `,
})
export class RandomClockComponent implements OnInit {
  clockComponents: Type<any>[] = [
    DigitalClockComponent,
    AnalogClockComponent,
    ProgressBarClockComponent,
    WordClockComponent,
  ];
  activeIndex: number = 0;

  constructor(
    private timeService: TimeService,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.renderClock();
    setInterval(() => this.renderClock(), 1000);
  }

  renderClock() {
    this.viewContainerRef.clear();
    const component = this.clockComponents[this.activeIndex];
    const factory = this.cfr.resolveComponentFactory(component);
    this.viewContainerRef.createComponent(factory);
    this.activeIndex = (this.activeIndex + 1) % this.clockComponents.length;
  }
}
