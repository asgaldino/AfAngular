import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly ApiAll = '/api/expense/all'
  private readonly ApiAdd = '/api/expense/add'

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
   }

  expenseList(){
    return this.httpClient.get<Expense[]>(this.ApiAll)
    .pipe(
      first(),
      //delay(3000),
      tap(expense => console.log(expense))
    );
  }

  onExpenses(){
    this.router.navigate(['expenses'], {relativeTo: this.activatedRoute});
  }

  save(record: Expense){

    //console.log(record);
    return this.httpClient.post<Expense>(this.ApiAdd, record)
    .pipe(first());
  }
}
