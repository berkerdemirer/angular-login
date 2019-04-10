import {AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class RegisterComponent implements OnInit, AfterViewInit {

  // Validators for email and password input fields
  registerForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
    retypedPasswordFormControl: new FormControl('', [Validators.required])
  });

  // Password input field visibility variable
  hide = true;

  constructor(private elementRef: ElementRef) {
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
    console.log(this.registerForm.get('emailFormControl').value);
  }

}
