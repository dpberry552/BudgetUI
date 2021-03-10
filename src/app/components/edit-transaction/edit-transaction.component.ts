import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  //eventually these will come from somewhere else
  types: Array<any> = [
    {value: 'Check', viewValue: 'Check'},
    {value: 'Debit', viewValue: 'Debit'}
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('here is the data...')
    console.log(this.data)
  }

  updatedate(event) {
    this.data.ActualDateTime = new Date(event);
  }

  currencyInputChanged(value) {
    var num = value.replace(/[$,]/g, "");
    return Number(num);
  }

}
