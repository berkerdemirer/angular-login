import {AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../_services/authentication/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../../../_services/user/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class RegisterComponent implements OnInit, AfterViewInit {

  errorMsg: string;

  // Validators for email and password input fields
  registerForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
    retypedPasswordFormControl: new FormControl('', [Validators.required])
  });

  // Password input field visibility variable
  hide = true;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/details']);
    }
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Change login module's background
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'cornflowerblue';
  }


  getEmailValidationErrorMessage() {
    return this.registerForm.get('emailFormControl').hasError('required') ? 'You must enter a value' :
      this.registerForm.get('emailFormControl').hasError('email') ? 'Not a valid email' :
        '';
  }

  // Provide error message if there is an error
  getPasswordValidationErrorMessage() {
    return this.registerForm.get('passwordFormControl').hasError('required') ? 'You must enter a value' :
      this.registerForm.get('passwordFormControl').hasError('minlength') ? 'Password should be min 6 chars or digits' :
        '';
  }

  submitRegisterForm() {
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMsg = error.error.message;
        });
  }

}
