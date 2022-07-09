import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiver'
})
export class ExpensePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Bradesco': return 'attach_money';
      case 'pago': return 'done';
    }
    return 'help';
  }

}
