import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

const loginRegisterRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRegisterRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRegisterRoutingModule {

}
