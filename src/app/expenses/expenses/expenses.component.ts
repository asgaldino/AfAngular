import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Expense } from '../model/expense';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ExpensesService } from './../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses$: Observable<Expense[]>;

  displayedColumns = [
    'id', 'item', 'receiver', 'number_installments','due_date','purchase_date', 'value_installments', 'actions'
  ];

  constructor(
    private expensesService: ExpensesService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) {
    this.expenses$ = this.expensesService.expenseList()
    .pipe(
      catchError(error =>{
        this.onOpenError('Erro ao carregar despesas')
        return of([])
      })
    );
  }
  onOpenError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  onDelete(){
    //var id = (<HTMLSelectElement>document.getElementById('id')).value;
    var id = '11';

    //console.log(this.expenses$.forEach)
    //{if(confirm('Erro ao deletar despesa')){window.location.reload();}}
    //let value = '8';
    console.log(id)
    const params = new HttpParams().set('id', id);
    this.httpClient.delete('/api/expense/delete', {params})
    .subscribe(result => console.log(result))
    //location.reload()
  }
  trataResposta() {
    let value = this.expenses$.subscribe();
    console.log(value)
    //Qualquer tratamento necessário
  }
  onEdit(){

  }
}
