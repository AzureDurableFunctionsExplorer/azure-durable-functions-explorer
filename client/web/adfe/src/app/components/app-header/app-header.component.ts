import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/store/states/user.state';
import { Observable } from 'rxjs';
import { User } from '@models';
import { Login, Logout } from '@actions';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Select(UserState.loggedInUser) loggedInUser$: Observable<User>;
  @Select(UserState.isLoggingIn) isLoggingIn$: Observable<boolean>;

  constructor(private readonly store: Store) { }

  login() {
    this.store.dispatch(new Login());
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}