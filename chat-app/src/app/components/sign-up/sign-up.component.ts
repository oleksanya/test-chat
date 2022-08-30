import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }


  signUp () {
    return this.authService.SignUp(this.signUpForm.value.email, this.signUpForm.value.password);
  }

  authGoogle () {
    return this.authService.GoogleAuth();
  }

}
