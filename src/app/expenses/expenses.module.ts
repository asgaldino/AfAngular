import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';




@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseFormComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExpensesModule { }
