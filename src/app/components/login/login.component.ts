import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { BudgetUser } from 'src/app/models/budgetUser';
import { Router, ActivatedRoute } from '@angular/router';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private eventHandler: EventHandlerService) { }

  ngOnInit() {
    
  }

  authenticate() {
    this.loginService.authenticateUser({UserName: this.username, Password: this.password}).subscribe((user: BudgetUser) => {
      if(user) {
        this.router.navigate(['accountSummary']).then(_ => {
          this.eventHandler.userAuthenticated();
          console.log(user.UserName + ' successfully logged in!')
        });
      }
    });
  }

}
