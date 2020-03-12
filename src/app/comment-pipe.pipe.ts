import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentPipe'
})
export class CommentPipePipe implements PipeTransform {

  transform(val): any {
    return val.split('<<>')[1]
  }

}
