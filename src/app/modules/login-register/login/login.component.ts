import {AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../_services/authentication/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class LoginComponent implements OnInit, AfterViewInit {


  errorMsg: string;

  // Validators for email and password input fields
  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.required])
  });


  // Particle JS attributes
  particleJsCustomStyle: object = {};
  particleJsCustomParams: object = {};
  width = 100;
  height = 100;
  // ---------------------

  // Password input field visibility variable
  hide = true;

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/details']);
    }
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
    return this.loginForm.get('emailFormControl').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('emailFormControl').hasError('email') ? 'Not a valid email' :
        '';
  }

  // Provide error message if there is an error
  getPasswordValidationErrorMessage() {
    return this.loginForm.get('passwordFormControl').hasError('required') ? 'You must enter a value' :
      '';
  }

  submitLoginForm() {

    this.errorMsg = '';

    this.authenticationService.login(this.loginForm.get('emailFormControl').value, this.loginForm.get('passwordFormControl').value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/details');
        },
        error => {
          console.log(error);
          this.errorMsg = error.error.message;
        });
  }


}
