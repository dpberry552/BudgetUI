import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiBaseURL: string = environment.apiBaseUrl;
  accountURL: string = environment.accountURL;
  constructor(private appConfigService: AppConfigService, private http: HttpClient) { }

  ngOnInit(): void {

  }

  getAccounts(userId: string) {
    return this.http.get(this.apiBaseURL + this.accountURL + '/user/' + userId).toPromise();
  }
}
