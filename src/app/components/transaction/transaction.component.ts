import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';
import { BudgetUser } from 'src/app/models/budgetUser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionComponent {
  constructor(private route: ActivatedRoute, private tranService: TransactionService, public editDialog: MatDialog) {
    this.route.params.subscribe( params => { 
      this.user = JSON.parse(localStorage.getItem('curUser'));
      if(this.user != null) {
        console.log(params)
        this.getTransactionsForAccount(params.id);
      }
    });
  }

  transactions: Transaction[];
  fields: string[] = ['Description', 'Type', 'Amount', 'Date', 'Expand', 'Edit'];
  user: BudgetUser;
  expandedTransaction: Transaction | null

  getTransactionsForAccount(accountId: string) {
    this.tranService.getTransactionsForAccount(accountId).then((t: Transaction[]) => {
      this.transactions = t;
      console.log('got transactions from db...');
      console.log(this.transactions);
    });
  }

  openEditDialog(t: Transaction): void {
    const dialogRef = this.editDialog.open(EditTransactionComponent, {
      width: '1000px',
      data: t
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
    });
  }

}