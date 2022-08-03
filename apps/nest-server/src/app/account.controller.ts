import { Controller, Post } from '@nestjs/common';
import { IAccountService } from '@trucks/client-shared';
import {
  CredentialsModel,
  AuthUserDto,
  NewUserModel,
} from '@trucks/core-shared';
import { Observable } from 'rxjs';

@Controller('account')
export class AccountController implements IAccountService {
  @Post('/check-username-availability')
  checkUsernameAvailablity(username: string): boolean {
    return false;
  }

  @Post('/login')
  login(credentails: CredentialsModel): AuthUserDto {
    return {
      name: 'ahsan',
      email: 'ahsantariq1713@gmail.com',
      token: '1234556',
      role: 'admin',
      department: 'MIT',
    };
  }

  @Post('/register')
  register(newUser: NewUserModel): AuthUserDto {
    throw new Error('Method not implemented.');
  }
}
