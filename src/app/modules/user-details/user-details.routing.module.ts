import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserOverviewComponent} from './user-overview/user-overview.component';

const userDetailsRoutes: Routes = [
  {path: '', component: UserOverviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(userDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserDetailsRoutingModule {

}
