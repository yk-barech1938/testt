import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstkey',
  standalone: true
})
export class FirstkeyPipe implements PipeTransform {

  transform(value: any): string | null {
    const keys = Object.keys(value);
    if(keys && keys.length>0)
        return keys[0];
    return null;
  }

}
