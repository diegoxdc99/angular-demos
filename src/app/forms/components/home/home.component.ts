import { Component, OnInit } from '@angular/core';
import { LinkCard } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linkCards: LinkCard[] = [
    {title: 'Validaciones condicionales', url: 'conditionalForms'},
    {title: 'Selector personalizado', url: 'customSelection'},


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
