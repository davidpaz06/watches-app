import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private systemTimeSubject = new BehaviorSubject<string>(
    this.getCurrentTime()
  );
  systemTime$ = this.systemTimeSubject.asObservable();

  constructor() {
    setInterval(() => this.updateSystemTime(), 1000);
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
  }

  private updateSystemTime() {
    this.systemTimeSubject.next(this.getCurrentTime());
  }
}
