import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginRegisterModule} from './modules/login-register/login-register.module';
import {UserDetailsModule} from './modules/user-details/user-details.module';
import {AuthGuard} from './_guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => LoginRegisterModule},
  {path: 'details', loadChildren: () => UserDetailsModule, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
