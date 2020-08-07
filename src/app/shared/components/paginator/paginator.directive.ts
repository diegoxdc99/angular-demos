import { Directive } from '@angular/core';

let uniqueId = 0;

@Directive({
  selector: '[appPaginator]'
})
export class PaginatorDirective {
  paginatorId = uniqueId++;
  totalPages = 0;
  constructor() {

  }

  createPage() {
    return ++this.totalPages;
  }
}
