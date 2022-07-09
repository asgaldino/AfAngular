import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ExpensePipe } from './pipes/expense.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ExpensePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    ExpensePipe
  ]
})
export class SharedModule { }
