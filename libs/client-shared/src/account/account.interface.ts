import {
  AuthUserDto,
  CredentialsModel,
  NewUserModel,
} from '@trucks/core-shared';
import { Observable } from 'rxjs';

export interface IAccountService {
  ///POST
  login(credentails: CredentialsModel): Observable<AuthUserDto> | AuthUserDto;

  ///POST
  register(newUser: NewUserModel): Observable<AuthUserDto> | AuthUserDto;

  ///Post
  checkUsernameAvailablity(username: string): Observable<boolean> | boolean;
}
