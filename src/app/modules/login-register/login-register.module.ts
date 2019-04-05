import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginRegisterRoutingModule} from './login-register-routing.module';
import {CustomMaterialModule} from '../angular-material/custom-material.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    LoginRegisterRoutingModule,
    CustomMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: []
})

export class LoginRegisterModule {
}
