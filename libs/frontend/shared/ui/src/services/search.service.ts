import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  filterListBySearchQuery(searchQuery: string, searchList: (string | SearchItem)[]): (string | SearchItem)[] {
    return searchList.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchQuery);
      }
      return Object.keys(item).some((key) => (item[key] as string).toLowerCase().includes(searchQuery));
    });
  }
}

// move to a shared module
type SearchItem = { [key: string]: string|number|boolean };