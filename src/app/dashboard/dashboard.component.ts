import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
items :any = ['Apple', 'Banana', 'Mango'];
searchText:string= '';
   private readonly oidcSecurityService = inject(OidcSecurityService);
  configuration$ = this.oidcSecurityService.getConfiguration();
  userData$ = this.oidcSecurityService.userData$;
isAuthenticated = false;

  ngOnInit(): void {
    
}


ngAfterViewInit(): void {
   this.oidcSecurityService.isAuthenticated$.subscribe(
      ({ isAuthenticated }) => {
        this.isAuthenticated = isAuthenticated;
      }
    );
  }

addItem() {
  this.items.push('New Item');
}

 login(): void {
    this.oidcSecurityService.authorize()
  }

}