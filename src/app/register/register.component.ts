import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  template: `
    <div class="register-container">
      <h1>Watches App</h1>
      <h2>Sign up</h2>
      <form (submit)="onSubmit($event)">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? <a href="/">Log in here</a></p>
      </div>
    </div>
  `,
  styles: [
    `
      .register-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
      }

      form {
        max-width: 300px;
        margin: 0 auto;
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 1em;
        background-color: #f9f9f9;
        color: #2b2b2b;
      }
      div {
        margin-bottom: 1em;
      }
      label {
        margin-bottom: 0.5em;
        display: block;
      }
      input {
        border: 1px solid #2b2b2b;
        background-color: #fff;
        color: #2b2b2b;
        padding: 0.5em;
        font-size: 1em;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
      }
      button {
        padding: 0.7em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        width: 100%;
      }
      button:hover {
        background-color: #0056b3;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: none;
      }
    `,
  ],
})
export class RegisterComponent {
  constructor(private router: Router, private auth: Auth) {}

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement)
      .value;
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      if ((error as any).code === 'auth/email-already-in-use') {
        console.error('The email address is already in use.');
        alert('The email address is already in use.');
      } else {
        console.error('Error registering user:', error);
        alert('Error registering user.');
      }
    }
  }
}
