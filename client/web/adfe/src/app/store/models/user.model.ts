import { User, FunctionApp } from '@models';

export type UserStateModel = {
  loggedInUser: User;
  isLoggingIn: boolean;
}