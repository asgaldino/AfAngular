import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expense } from '../model/expense';

import { ExpensesService } from './../services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  form: FormGroup;
  formId: FormGroup;
  userid: string = '';
  ApiAdd: string = '/api/expense/add';


  constructor(
    private formBuilder: FormBuilder,
    private service: ExpensesService,
    private snackBar: MatSnackBar,
    private httpClient: HttpClient,
    private location: Location


    ) {
    this.formId = formBuilder.group({
      userid: null
    })
    this.form = formBuilder.group({
      item: [null],
      receiver: [null],
      number_installments: [null],
      due_date: [null],
      purchase_date: [null],
      value_installments: [null]

    })
   }

  ngOnInit(): void {
  }
  
  save(record: Expense){
    let value = this.formId.value.userid;
    const params = new HttpParams().set('userid', value);
    return this.httpClient.post<Expense>(this.ApiAdd, record, {params});
  }

  onSubmit(){
    this.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
    this.onCancel();
  }
  onCancel(){
    this.location.back();

  }
  private onError(){
    this.snackBar.open("Erro ao salvar despesa", '', {duration: 3000});
  }
}
