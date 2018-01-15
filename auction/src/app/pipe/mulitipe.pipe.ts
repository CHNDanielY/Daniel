import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mulitipe'
})
export class MulitipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
