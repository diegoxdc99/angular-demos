import { Component, OnInit, Optional, SkipSelf, Inject, HostBinding } from '@angular/core';
import { PaginatorDirective } from '../paginator.directive';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @HostBinding('class.border') someField = true;
  paginator: PaginatorDirective;
  pageNumber: number;
  constructor(
    paginator: PaginatorDirective
  ) {
    this.paginator = paginator;
  }

  ngOnInit(): void {
    this.pageNumber = this.paginator.createPage();
  }

}
