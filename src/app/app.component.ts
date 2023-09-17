import { Component, OnInit } from '@angular/core';
import { AccountService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'login-registration';
  userIsLoggedin = false;

  
  constructor(
    private accountService: AccountService
) {
}

  ngOnInit() {
      this.userIsLoggedin = this.accountService.userIsLoggedin;
  }

}
