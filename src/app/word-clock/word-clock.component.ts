import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-word-clock',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h2>Word Clock</h2>
      <div class="words">
        <div class="hours">
          {{ hourInWords }}
        </div>
        <div class="minutes">
          {{ minuteInWords }}
        </div>
        <div class="seconds">
          {{ secondInWords }}
        </div>
      </div>
    </div>
  `,
  styles: `
    @font-face { 
        font-family: 'digitalFont'; 
        src: url('../assets/DS-DIGI.TTF') format('truetype');
      }

      .container {
        height: 100%;
        width: 300px;  
        border: 1px solid #ccc;
        background-color: #333;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        color: #f0f0f0;
        border-radius: 10px;
        padding: 20px;
        margin: 0 auto;
      }

      .words div{
        color: #f0f0f0;
        font-size: 3rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 20px 0;
        font-family: 'digitalFont'
      }
  `,
})
export class WordClockComponent implements OnInit {
  systemTime: Date = new Date();
  hourInWords: string = '';
  minuteInWords: string = '';
  secondInWords: string = '';

  words = [
    'zero',
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
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty-one',
    'twenty-two',
    'twenty-three',
    'twenty-four',
    'twenty-five',
    'twenty-six',
    'twenty-seven',
    'twenty-eight',
    'twenty-nine',
    'thirty',
    'thirty-one',
    'thirty-two',
    'thirty-three',
    'thirty-four',
    'thirty-five',
    'thirty-six',
    'thirty-seven',
    'thirty-eight',
    'thirty-nine',
    'forty',
    'forty-one',
    'forty-two',
    'forty-three',
    'forty-four',
    'forty-five',
    'forty-six',
    'forty-seven',
    'forty-eight',
    'forty-nine',
    'fifty',
    'fifty-one',
    'fifty-two',
    'fifty-three',
    'fifty-four',
    'fifty-five',
    'fifty-six',
    'fifty-seven',
    'fifty-eight',
    'fifty-nine',
  ];

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.timeService.systemTime$.subscribe((time) => {
      this.timeService.systemTime$.subscribe((time) => {
        this.updateWords();
        setInterval(() => this.updateWords(), 1000);
      });
    });
  }

  updateWords() {
    this.systemTime = new Date();
    const hours = this.systemTime.getHours();
    const minutes = this.systemTime.getMinutes();
    const seconds = this.systemTime.getSeconds();

    this.hourInWords = this.words[hours];
    this.minuteInWords = this.words[minutes];
    this.secondInWords = this.words[seconds];
  }
}
