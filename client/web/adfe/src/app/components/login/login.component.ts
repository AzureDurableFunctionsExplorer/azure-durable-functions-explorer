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
    this.http.get<any>(`https://management.azure.com/tenants/?api-version=2017-05-10`).subscribe(a => console.dir(a));
  }
}
