import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  imports: [NgFor, NgStyle],
  template: `
    <div class="container">
      <h2>Analog Clock</h2>
      <div class="clock">
        <div class="center"></div>
        <div
          *ngFor="let number of clockNumbers"
          class="number"
          [ngStyle]="{ top: number.top, left: number.left }"
        >
          {{ number.value }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .clock {
        width: 300px;
        height: 300px;
        border: 4px solid #f0f0f0;
        background-color: #2b2b2b;
        border-radius: 50%;
        position: relative;
      }

      .center {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background-color: #f0f0f0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      .number {
        position: absolute;
        color: #f0f0f0;
        font-size: 24px;
        text-align: center;
        transform: translate(-50%, -50%);
      }
    `,
  ],
})
export class AnalogClockComponent implements OnInit {
  clockNumbers = [
    { value: 1, top: '15%', left: '75%' },
    { value: 2, top: '30%', left: '90%' },
    { value: 3, top: '50%', left: '95%' },
    { value: 4, top: '70%', left: '90%' },
    { value: 5, top: '85%', left: '75%' },
    { value: 6, top: '95%', left: '50%' },
    { value: 7, top: '85%', left: '25%' },
    { value: 8, top: '70%', left: '10%' },
    { value: 9, top: '50%', left: '5%' },
    { value: 10, top: '30%', left: '10%' },
    { value: 11, top: '15%', left: '25%' },
    { value: 12, top: '5%', left: '50%' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
