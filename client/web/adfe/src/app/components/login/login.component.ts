import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authenticationService: AuthenticationService, private http: HttpClient) { }

  ngOnInit() {
  }

  login(): void {

    this.authenticationService.login();
  }

  logout(): void {

    this.authenticationService.logout();
  }

  test(): void {
    console.dir(this.authenticationService.user);
    console.dir((<any>(this.authenticationService.user.idToken)).tid);

    this.http.get<any>(`https://management.azure.com/subscriptions/?api-version=2017-05-10`).subscribe(a => console.dir(a));
  }

  changeTenant(): void {

    const provider: string = this.authenticationService.user.identityProvider;
    const slash = provider.lastIndexOf('/');
    this.authenticationService.loginToTenant(provider.substring(0, slash));
  }
}
