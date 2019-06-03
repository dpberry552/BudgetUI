import { Injectable, EventEmitter } from '@angular/core';
import { BudgetUser } from '../models/budgetUser';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  public authenticated: EventEmitter<BudgetUser>;

  constructor() {
    this.authenticated = new EventEmitter();
   }

   public userAuthenticated(user: BudgetUser) {
     this.authenticated.emit(user);
   }
}
