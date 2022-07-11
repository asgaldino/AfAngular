import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  private readonly ApiAdd = '/api/expense/add'
  userid: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ExpensesService,
    private snackBar: MatSnackBar,
    private httpClient: HttpClient

    ) {
    this.formId = formBuilder.group({
      userid: [null]
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
/*
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }

  save(record: Expense){
    const userid = this.formId.value.toString()
    //const params = new HttpParams()
    const params = new HttpParams()
      .set('userid', '5');
    const url = this.ApiAdd;
    console.log(url, null, { params: params })

    //console.log(record);
    return this.httpClient.post<Expense>(url, null, { params: params });

  }
  */
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }
  onCancel(){

  }
  private onError(){
    this.snackBar.open("Erro ao salvar despesa", '', {duration: 3000});
  }
}
