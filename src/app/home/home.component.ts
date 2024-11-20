import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ClockListComponent } from '../clock-list/clock-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockListComponent],
  template: `
    <div class="container">
      <div class="header">
        <h1>Welcome to the Watches App</h1>
        <button (click)="signOut()" class="logout-button">Sign Out</button>
      </div>

      <h2>What time is it? find it out in 10 different ways!</h2>

      <app-clock-list></app-clock-list>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 100%;
        height: 100vh;
        box-sizing: border-box;
      }

      .header {
        background-color: #f0f0f0;
        text-align: center;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
      }

      h1 {
        color: #2b2b2b;
        margin-top: 75px;
      }
      .logout-button {
        background-color: transparent;
        color: #2b2b2b;
        border: 2px solid #2b2b2b;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.2s ease;
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .logout-button:hover {
        background-color: #ff1a1a;
        border-color: #ff1a1a;
        color: white;
      }

      h2 {
        margin: 30px;
      }
    `,
  ],
})
export class HomeComponent {
  constructor(private auth: Auth) {}
  async signOut() {
    try {
      await this.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}
