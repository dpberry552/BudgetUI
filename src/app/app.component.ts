import { Component } from '@angular/core';
import { EventHandlerService } from './services/event-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';
  login: boolean = true;
  constructor(private eventHandler: EventHandlerService) { 
    eventHandler.authenticated.subscribe(_ => {
      this.login = false;
    })
  }
}
