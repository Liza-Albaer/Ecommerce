import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:any[],searchkey:string) {
    if (!list || !searchkey) return list;
    return list.filter((item)=>item.title.toLowerCase().includes(searchkey.toLowerCase()));
  }

}
