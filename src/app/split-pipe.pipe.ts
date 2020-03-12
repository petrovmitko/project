import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPipe'
})
export class SplitPipePipe implements PipeTransform {

  transform(val): any {
    return val.split('<<>')[0]
  }

}
