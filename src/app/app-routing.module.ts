import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginRegisterModule} from './modules/login-register/login-register.module';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => LoginRegisterModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
