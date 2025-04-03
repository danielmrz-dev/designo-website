import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBackgroundImage'
})
export class GetBackgroundImagePipe implements PipeTransform {

  transform(value: string): string {

    

    return '';
  }

}
