import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginRegisterRoutingModule} from './login-register-routing.module';
import {CustomMaterialModule} from '../angular-material/custom-material.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ParticlesModule} from 'angular-particle';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    LoginRegisterRoutingModule,
    CustomMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ParticlesModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: []
})

export class LoginRegisterModule {
}
