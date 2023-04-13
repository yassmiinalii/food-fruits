import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email;
  password;

  mode = 'login';
	constructor(public activeModal: NgbActiveModal) {}

  login(){

    this.activeModal.close(true);
  }

  onGoToSignUp(){
    this.mode = 'signUp';
  }
  onGoForgotPassword(){
    this.mode = 'forgotPassword';
  }
  onBackToLogin(){
    this.mode = 'login';
  }

  onSignUp(){
    this.activeModal.close('signUp');
  }
}
