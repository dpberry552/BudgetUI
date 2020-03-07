import { TransactionLine } from './transactionline';

export class Transaction {
    AccountId: number;
    Description: string;
    Type: string;
    Amount: number;
    ActualDateTime: Date;
    PostDateTime: Date;
    TransactionLines: TransactionLine[];
}