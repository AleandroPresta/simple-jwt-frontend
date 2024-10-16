import { Component } from '@angular/core';
import { WelcomeContentComponent } from "../welcome-content/welcome-content.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomeContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
