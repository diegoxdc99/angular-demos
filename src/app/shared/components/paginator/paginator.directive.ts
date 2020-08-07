import { Directive } from '@angular/core';

@Directive({
  selector: '[appPaginator]'
})
export class PaginatorDirective {

  constructor() {
    console.log('paginador creado');
  }


}
