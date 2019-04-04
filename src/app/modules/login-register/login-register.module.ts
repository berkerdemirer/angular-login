import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginRegisterRoutingModule} from './login-register-routing.module';
import {CustomMaterialModule} from '../angular-material/custom-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    LoginRegisterRoutingModule,
    CustomMaterialModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: []
})

export class LoginRegisterModule {
}
