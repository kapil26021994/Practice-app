import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
         config: {
            authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_C15y4O15I',
            redirectUrl: 'http://localhost:4200',
            clientId: '6galjkvjmef245069cq2utkfte',
            scope: 'email openid phone',
            responseType: 'code'
        },
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
