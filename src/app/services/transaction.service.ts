import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiBaseURL: string = environment.apiBaseUrl;
  transactionURL: string = environment.transactionURL;

  constructor(private http: HttpClient) { }

  getTransactionsForAccount(accountId: string) {
    return this.http.get(this.apiBaseURL + this.transactionURL + "/account/" + accountId).toPromise();
  }
}
