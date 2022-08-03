import { Component, OnInit } from '@angular/core';
import { AccountService } from '@trucks/client-shared';

import { CredentialsModel } from '@trucks/core-shared';

@Component({
  selector: 'x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: CredentialsModel = new CredentialsModel();

  constructor(private accountService: AccountService) {}

  submit() {
    console.log(this.form);

    this.accountService.login(this.form).subscribe((data) => {
      console.log(data);
    });
  }

  checkUsernameAvailablity() {
    this.accountService
      .checkUsernameAvailablity('ahsantariq1713')
      .subscribe((avail) => {
        console.log(avail);
      });
  }
}
