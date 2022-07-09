import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  { path: '', component: ExpensesComponent },
  { path: 'new', component: ExpenseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
