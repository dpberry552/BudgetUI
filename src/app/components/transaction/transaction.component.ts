import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';
import { BudgetUser } from 'src/app/models/budgetUser';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tranService: TransactionService) {
    this.route.params.subscribe( params => { 
      this.user = JSON.parse(localStorage.getItem('curUser'));
      if(this.user != null) {
        console.log(params)
        this.getTransactionsForAccount(params.id);
      }
    });
  } 

  transactions: Transaction[];
  fields: string[] = ['Description', 'Type', 'Amount', 'Date'];
  user: BudgetUser;

  ngOnInit() {
  }

  getTransactionsForAccount(accountId: string) {
    this.tranService.getTransactionsForAccount(accountId).then((t: Transaction[]) => {
      this.transactions = t;
      console.log('got transactions from db...');
      console.log(this.transactions);
    });
  }
 
}
