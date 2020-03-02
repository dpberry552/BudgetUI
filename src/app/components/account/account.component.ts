import { Component, OnInit } from '@angular/core';
import { BudgetUser } from 'src/app/models/budgetUser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventHandlerService } from 'src/app/services/event-handler.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: BudgetUser;
  accounts: Account[];

  constructor(private route: ActivatedRoute, 
              private eventHandler: EventHandlerService,
              private accountService: AccountService) { 
    this.user = JSON.parse(localStorage.getItem('curUser'));
    console.log(this.user);
    if(this.user != null) {
      this.GetAccounts();
    }
  }

  ngOnInit() {
    
  }

  private GetAccounts() {
    this.accountService.getAccounts(this.user.Id).then((accts: Account[]) => {
      this.accounts = accts;
      console.log(this.accounts);
    })
  }

}
