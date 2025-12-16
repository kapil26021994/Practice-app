import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]):any {
    return value.filter((item:any)=>{
      return item.toLowerCase().includes(args.toString().toLowerCase());
    })
  }

}
