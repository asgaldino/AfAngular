import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly API = '/api/expense/all'

  constructor(private httpClient: HttpClient) { }

  expenseList(){
    return this.httpClient.get<Expense[]>(this.API)
    .pipe(
      first(),
      //delay(3000),
      tap(expense => console.log(expense))
    );
  }
}
