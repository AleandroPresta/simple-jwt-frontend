import { Component } from '@angular/core';
import { WelcomeContentComponent } from "../welcome-content/welcome-content.component";
import { LoginFormComponent } from "../login-form/login-form.component";
import { AxiosService } from '../axios.service';
import { first } from 'rxjs';
import { ButtonsComponent } from "../buttons/buttons.component";
import { NgIf } from '@angular/common';
import { AuthContentComponent } from "../auth-content/auth-content.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomeContentComponent, LoginFormComponent, ButtonsComponent,
    NgIf, AuthContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string = "welcome";

  constructor(private axiosService: AxiosService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then((response: any) => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    }).catch((error: any) => {
      console.error(error);
    });
  }

  onRegister(input: any): void {
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then((response: any) => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    }).catch((error: any) => {
      console.error(error);
    });
  }

}
