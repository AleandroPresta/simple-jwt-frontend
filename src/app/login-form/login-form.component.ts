import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = "login";
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  password: string = "";

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({ "login": this.username, "password": this.password });
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({ "firstName": this.firstName, "lastName": this.lastName, "login": this.username, "password": this.password });
  }

  setActive(active: string) {
    this.active = active;
  }

}
