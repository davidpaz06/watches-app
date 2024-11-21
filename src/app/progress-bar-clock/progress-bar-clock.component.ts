import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-progress-bar-clock',
  standalone: true,
  imports: [NgFor],

  template: `
    <div class="pb-clock">
      <h2>Progress Bar Clock</h2>
      <div class="progress-bar">
        <div class="time-container">
          <div class="bar">
            <div
              *ngFor="let mark of hourMarks; let i = index"
              class="mark {{ mark }}"
            >
              <label>{{ i + 1 }}</label>
            </div>
            <div class="progress hour" [style.height.%]="hourProgress"></div>
          </div>
          <h3>Hour</h3>
        </div>

        <div class="time-container">
          <div class="bar">
            <div class="mark fifteen">
              <label>15</label>
            </div>
            <div class="mark thirty">
              <label>30</label>
            </div>
            <div class="mark fortyfive">
              <label>45</label>
            </div>
            <div
              class="progress minute"
              [style.height.%]="minuteProgress"
            ></div>
          </div>
          <h3>Minute</h3>
        </div>

        <div class="time-container">
          <div class="bar">
            <div class="mark ten-seconds">
              <label>10</label>
            </div>
            <div class="mark twenty-seconds">
              <label>20</label>
            </div>
            <div class="mark thirty-seconds">
              <label>30</label>
            </div>
            <div class="mark forty-seconds">
              <label>40</label>
            </div>
            <div class="mark fifty-seconds">
              <label>50</label>
            </div>
            <div
              class="progress second"
              [style.height.%]="secondProgress"
            ></div>
          </div>
          <h3>Second</h3>
        </div>
      </div>
    </div>
  `,

  styles: `
  .pb-clock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2b2b2b;
    color: #f0f0f0;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    width: 500px;
    margin: 0 auto;
  }

  .progress-bar {
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .time-container {
    height: 90%;
    width: 33.33%;
    transition: width 1s linear;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bar{
    height: 100%;
    width: 25%;
    background-color: transparent;
    border: 2px solid #f0f0f0;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .progress{
    height: 60%;
    width: 100%;
  }

  .mark{
    height: 1%;
    width: 100%;
    background-color: #f0f0f0;
    opacity: 0.5;
    position: absolute;
  }

  label{
    color: #f0f0f0;
    position: absolute;
    top: -6.5px;
    left: 110%;
    font-size: 12px;
  }

  .hour {
    background-color: #edbb32;
  }

  .one{
    top: 91.666%;
  }

  .two{
    top: 83.333%;
  }

  .three{
    top: 75%;
  }

  .four{
    top: 66.666%;
  }

  .five{
    top: 58.333%;
  }

  .six{
    top: 50%;
  }

  .seven{
    top: 41.666%;
  }

  .eight{
    top: 33.333%;
  }

  .nine{
    top: 25%;
  }

  .ten{
    top: 16.666%;
  }

  .eleven{
    top: 8.333%;
  }

  .minute {
    background-color: #3289ed;
  }

  .fifteen{
    top: 75%;
  }

  .thirty{
    top: 50%;
  }

  .fortyfive{
    top: 25%;
  }

  .second {
    background-color: crimson;
  }

  .ten-seconds{
    top: 83.33%;
  }

  .twenty-seconds{
    top: 66.66%;
  }

  .thirty-seconds{
    top: 50%;
  }

  .forty-seconds{
    top: 33.33%;
  }

  .fifty-seconds{
    top: 16.66%;
  }

  h3{
    margin: 0;
  }
  
  `,
})
export class ProgressBarClockComponent implements OnInit {
  systemTime: string = '';
  hourMarks = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
  ];

  hourProgress: number = 0;
  minuteProgress: number = 0;
  secondProgress: number = 0;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.timeService.systemTime$.subscribe((time) => {
      this.systemTime = time;
      this.updateProgressBars();
      setInterval(() => this.updateProgressBars(), 1000);
    });
  }

  updateProgressBars() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const hourProgress = ((hours % 12) / 12) * 100;
    const minuteProgress = (minutes / 60) * 100;
    const secondProgress = (seconds / 60) * 100;

    this.hourProgress = hourProgress;
    this.minuteProgress = minuteProgress;
    this.secondProgress = secondProgress;

    console.log('hourProgress:', hourProgress);
    console.log('minuteProgress:', minuteProgress);
    console.log('secondProgress:', secondProgress);
  }
}
