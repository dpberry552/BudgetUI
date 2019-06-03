import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  public authenticated: EventEmitter<any>;

  constructor() {
    this.authenticated = new EventEmitter();
   }

   public userAuthenticated() {
     this.authenticated.emit();
   }
}
