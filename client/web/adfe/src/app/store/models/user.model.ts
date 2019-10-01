import { User } from '@models';

export type UserStateModel = {
  loggedInUser: User;
  isLoggingIn: boolean;
}