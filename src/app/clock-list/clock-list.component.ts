import { NgFor, NgClass, NgIf, NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { SandClockComponent } from '../sand-clock/sand-clock.component';
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
    `,
  ],
})
export class ClockListComponent {
  clocks: string[] = [
    'Digital',
    'Analog',
    'Sand Clock',
    'Binary',
    'Word Clock',
    'Sun Clock',
    'Moon Clock',
    'Water Clock',
    'Flower Clock',
    'Pendulum Clock',
  ];

  activeIndex: number | null = null;
  systemTime: string = '';

  clockComponents = [
    DigitalClockComponent,
    AnalogClockComponent,
    SandClockComponent,
  ];

  constructor(private timeService: TimeService) {}

  render(index: number) {
    this.activeIndex = index;
  }
}
