import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      item: [null],
      receiver: [null],
      number_installments: [null],
      due_date: [null],
      purchase_date: [null],
      value_installments: [null],
      userid: [null]
    })
   }

  ngOnInit(): void {
  }

}
