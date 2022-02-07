import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTextFilter'
})
export class SearchTextFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    const regex = new RegExp(searchText,"gi");

    let newItem = items.filter(it => {
      return it.title.match(regex)?.length > 0 ;
    });

    return newItem;
  }

}
