import { Component, OnInit, HostBinding } from '@angular/core';
import { accordionAnimations } from './accordion-animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [accordionAnimations.bodyExpansion]
})
export class AccordionComponent implements OnInit {
  @HostBinding('class.expanded')
  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }

  getState() {
    return this.isExpanded ? 'expanded' : 'collapsed';
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
