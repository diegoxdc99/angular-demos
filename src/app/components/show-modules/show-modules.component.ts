import { Component, OnInit } from '@angular/core';
import { LinkCard } from 'src/app/core';

@Component({
  selector: 'app-show-modules',
  templateUrl: './show-modules.component.html',
  styleUrls: ['./show-modules.component.scss']
})
export class ShowModulesComponent implements OnInit {
  linkCards: LinkCard[] = [
    {title: 'Formularios', url: '/forms'},
    {title: 'Animaciones', url: '/animations'},
    {title: 'Reusables', url: '/reusable'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
