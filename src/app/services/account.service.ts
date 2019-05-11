import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiBaseURL: string;
  accountURL: string;
  constructor(private appConfigService: AppConfigService, private http: HttpClient) { }

  ngOnInit(): void {
    this.apiBaseURL = this.appConfigService.apiBaseUrl;
    this.accountURL = this.appConfigService.accountURL;
  }

  getAccounts() {
    return this.http.get(this.apiBaseURL + this.accountURL).toPromise();
  }
}
