import { Component, OnInit, QueryList, ContentChildren } from '@angular/core';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.scss']
})
export class AccordionExampleComponent implements OnInit {
  private _ownHeaders = new QueryList<AccordionComponent>();
  constructor() { }

  ngOnInit(): void {
  }
}
