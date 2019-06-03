import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseURL: string;
  userURL: string;

  constructor(private appConfigService: AppConfigService, private http: HttpClient) { }

  ngOnInit() {
    this.apiBaseURL = this.appConfigService.apiBaseUrl;
    this.userURL = this.appConfigService.accountURL;
  }

  getUserByUserName(username: string) {
    return this.http.get(this.apiBaseURL + this.userURL).toPromise();
  }

}
