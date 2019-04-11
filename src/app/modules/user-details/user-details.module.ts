import {NgModule} from '@angular/core';
import {CustomMaterialModule} from '../angular-material/custom-material.module';
import {CommonModule} from '@angular/common';
import {UserOverviewComponent} from './user-overview/user-overview.component';
import {UserDetailsRoutingModule} from './user-details.routing.module';

@NgModule({
  declarations: [
    UserOverviewComponent,
  ],
  imports: [
    UserDetailsRoutingModule,
    CustomMaterialModule,
    CommonModule,
  ],
  exports: [
    UserOverviewComponent
  ],
  providers: []
})

export class UserDetailsModule {
}
