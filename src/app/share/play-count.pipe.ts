import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  transform(value: any, args?: any): number | string {
    if(value > 10000){
      return Math.floor(value / 10000) + '万';
    } else {
      return value;
    }
  }

}
