import { Component, OnInit } from '@angular/core';
import { BudgetUser } from 'src/app/models/budgetUser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private eventHandler: EventHandlerService) { 
    eventHandler.authenticated.subscribe(user => {
      this.user = user;
      console.log('account summary loaded...');
      console.log(this.user);
    })
  }

  ngOnInit() {
  }

}
