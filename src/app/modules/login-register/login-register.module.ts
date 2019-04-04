import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginRegisterRoutingModule} from './login-register-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    LoginRegisterRoutingModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: []
})

export class LoginRegisterModule {
}
