import { Component } from '@angular/core';
import { AccountService } from '@trucks/client-shared';
import { setStatusBarColor } from '../../../utils';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    setStatusBarColor('dark', '#97d9e9');

    this.accountService
      .login({ email: '', password: '' })
      .subscribe((data) => console.log(data));
  }
}
