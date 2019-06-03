import { Injectable } from '@angular/core';
import { BudgetUser } from 'src/app/models/budgetUser';
import { AppConfigService } from '../app-config.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiBaseURL: string;
  userURL: string;

  constructor(private http: HttpClient) { 
    this.apiBaseURL = environment.apiBaseUrl;
    this.userURL = environment.userURL;
  }

  ngOnInit() {

  }

  authenticateUser(user: any): Observable<BudgetUser> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log('url: ' + this.apiBaseURL + this.userURL);
    return this.http.post<BudgetUser>(this.apiBaseURL + this.userURL, user, httpOptions);
  }
}
