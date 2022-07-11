import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly ApiAll = '/api/expense/all'
  private readonly ApiAdd = '/api/expense/add'

  constructor(
    private httpClient: HttpClient
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

  save(record: Expense){

    //console.log(record);
    return this.httpClient.post<Expense>(this.ApiAdd, record)
    .pipe(first());
  }
}
