import { NgFor, NgClass, NgIf, NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { ProgressBarClockComponent } from '../progress-bar-clock/progress-bar-clock.component';
import { RandomClockComponent } from '../random-clock/random-clock.component';
import { WordClockComponent } from '../word-clock/word-clock.component';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-clock-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, NgComponentOutlet],
  template: `
    <div class="clock-wrap">
      <ul>
        <li
          *ngFor="let clock of clocks; let i = index"
          [ngClass]="{ active: activeIndex === i }"
          (click)="render(i)"
        >
          {{ clock }}
        </li>
      </ul>
      <div class="clock-display">
        <ng-container *ngIf="activeIndex !== null">
          <ng-container
            *ngComponentOutlet="clockComponents[activeIndex]"
          ></ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .clock-wrap {
      }

      ul {
        list-style-type: none;
        padding: 10px;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px 0;
        grid-template-rows: repeat(2, auto);
      }

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #ccc;
        padding: 20px;
        transition: 0.2s ease;
      }

      li:hover {
        background-color: #f0f0f0;
        color: #2b2b2b;
        cursor: default;
      }

      .active {
        background-color: #007bff;
        color: white;
      }

      .active:hover {
        background-color: #007bff;
        color: white;
      }

      .clock-display {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class ClockListComponent {
  clocks: string[] = [
    'Digital',
    'Analog',
    'Progress Bar',
    'Random Clock',
    'Word Clock',
    'Clock 6',
    'Clock 7',
    'Clock 8',
    'Clock 9',
    'Clock 10',
  ];

  activeIndex: number | null = 3;
  systemTime: string = '';

  clockComponents = [
    DigitalClockComponent,
    AnalogClockComponent,
    ProgressBarClockComponent,
    RandomClockComponent,
    WordClockComponent,
  ];

  constructor(private timeService: TimeService) {}

  render(index: number) {
    this.activeIndex = index;
  }
}
