import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  signInForm!: FormGroup;

  constructor(  public authService: AuthService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  signIn () {
    return this.authService.SignIn(this.signInForm.value.email, this.signInForm.value.password);
  }

  authGoogle () {
    return this.authService.GoogleAuth();
  }
}
