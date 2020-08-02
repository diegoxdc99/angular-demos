import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-selection',
  templateUrl: './custom-selection.component.html',
  styleUrls: ['./custom-selection.component.scss']
})
export class CustomSelectionComponent implements OnInit {
  @Input() searchLists = [
    {id: 1, text: 'Opción 0'},
    {id: 2, text: 'Opción 1'},
    {id: 3, text: 'Opción 2'},
    {id: 4, text: 'Opción 3'},
    {id: 5, text: 'Opción 4'},
    {id: 6, text: 'Opción 5'},
    {id: 7, text: 'Opción 6'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
