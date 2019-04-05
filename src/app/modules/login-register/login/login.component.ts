import {AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit, AfterViewInit {

  // Validators for email and password input fields
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.required]);

  // Particle JS attributes
  particleJsCustomStyle: object = {};
  particleJsCustomParams: object = {};
  width = 100;
  height = 100;
  // ---------------------

  // Password input field visibility variable
  hide = true;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {

    this.particleJsCustomStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.particleJsCustomParams = {
      particles: {
        number: {
          value: 75,
        },
        color: {
          value: '#312a2d'
        },
        shape: {
          type: 'circle',
        },
      }
    };

  }

  ngAfterViewInit() {
    // Change login module's background
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'cornflowerblue';
  }

  getEmailValidationErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  // Provide error message if there is an error
  getPasswordValidationErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      '';
  }


}
