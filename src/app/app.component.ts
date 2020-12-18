import { Component } from '@angular/core';
import { EventHandlerService } from './services/event-handler.service';
import { BudgetUser } from './models/budgetUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';
  login: boolean = true;
  user: BudgetUser;

  constructor(private eventHandler: EventHandlerService) { 
    eventHandler.authenticated.subscribe(user => {
      this.login = localStorage.getItem('curUser') == null;
      this.user = user;
      localStorage.setItem('curUser', JSON.stringify(user));
    })
  }
}
