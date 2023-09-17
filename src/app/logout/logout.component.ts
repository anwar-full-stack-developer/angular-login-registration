import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(
      private accountService: AccountService
  ) {
      // redirect to home if already logged in
      this.accountService.logout();
  }

  
  ngOnInit() {
  }
}
