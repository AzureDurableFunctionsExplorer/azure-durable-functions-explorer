import { State, Selector, Action, StateContext, InitState } from "@ngxs/store";
import { UserStateModel } from '../models';
import { Login, Logout } from '@actions';

@State<UserStateModel>({
  name: "user",
  defaults: {
    loggedInUser: null,
    isLoggingIn: false
  }
})
export class UserState {

  @Selector()
  static loggedInUser(state: UserStateModel) {
    return state.loggedInUser;
  }

  @Selector()
  static isLoggingIn(state: UserStateModel) {
    return state.isLoggingIn;
  }

  @Action(Login)
  async login(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ isLoggingIn: true });
    await new Promise(resolve => setTimeout(() => resolve(), 3000));
    ctx.patchState({
      loggedInUser: {
        email: "moaid.hathot@outlook.com",
        imageUrl: "https://avatars3.githubusercontent.com/u/8770486?s=400&v=4"
      },
      isLoggingIn: false
    });
  }

  @Action(Logout)
  async logout(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ isLoggingIn: true });
    await new Promise(resolve => setTimeout(() => resolve(), 3000));
    ctx.patchState({
      loggedInUser: null,
      isLoggingIn: false
    });
  }
}