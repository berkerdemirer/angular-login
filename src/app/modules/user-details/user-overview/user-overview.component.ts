import {AfterViewInit, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../_services/authentication/authentication.service';
import {User} from '../../../_models/user/user.model';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class UserOverviewComponent implements AfterViewInit {
  currentUser: User;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => this.currentUser = x);

    console.log(this.currentUser);
  }

  ngAfterViewInit(): void {
    // Change login module's background
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'cornflowerblue';
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth']);
  }

}
