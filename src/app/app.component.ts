import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthContentComponent } from "./auth-content/auth-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-jwt-frontend';
}
