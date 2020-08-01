import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-modules',
  templateUrl: './show-modules.component.html',
  styleUrls: ['./show-modules.component.scss']
})
export class ShowModulesComponent implements OnInit {
  linkCards: LinkCards[] = [
    {title: 'Formularios', url: '/forms'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
