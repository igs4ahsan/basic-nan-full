import { Injectable } from '@angular/core';
import {
  CredentialsModel,
  AuthUserDto,
  NewUserModel,
} from '@trucks/core-shared';
import { Observable } from 'rxjs';
import { IAccountService } from './account.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService implements IAccountService {
  constructor(private http: HttpClient) {}

  checkUsernameAvailablity(username: string): Observable<boolean> {
    return this.http.post<boolean>(
      '/account/check-username-availability',
      username
    );
  }

  login(credentails: CredentialsModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>('/account/login', credentails);
  }

  register(newUser: NewUserModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>('/account/register', newUser);
  }
}
