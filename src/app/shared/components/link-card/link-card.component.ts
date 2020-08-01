import { Component, OnInit, Input } from '@angular/core';
import { LinkCard } from 'src/app/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {
  @Input() linkCards: LinkCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
