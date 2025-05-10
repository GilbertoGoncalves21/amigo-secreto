import { Pipe, PipeTransform } from '@angular/core';
import { EMPTY } from '../../utils';

@Pipe({
  name: 'maskCode'
})
export class MaskCodePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return EMPTY;

    return value.charAt(0) + value.slice(1, value.length - 1).replace(/./g, '*') + value.charAt(value.length - 1);
  }
}
