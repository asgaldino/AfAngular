import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ExpensesService } from './../services/expenses.service';
import { Component, OnInit } from '@angular/core';

import { Expense } from '../model/expense';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  displayedColumns = [
    'item', 'receiver', 'number_installments','due_date','purchase_date', 'value_installments'
  ];

  constructor(private expensesService: ExpensesService,
    public dialog: MatDialog
    ) {
    this.expenses$ = this.expensesService.expenseList()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar despesas')
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
