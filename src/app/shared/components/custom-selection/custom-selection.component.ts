import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { customSelectedAnimations } from './custom-selection-animation';

@Component({
  selector: 'app-custom-selection',
  templateUrl: './custom-selection.component.html',
  styleUrls: ['./custom-selection.component.scss'],
  animations: [customSelectedAnimations.optionList]
})
export class CustomSelectionComponent implements OnInit {
  @ViewChild('searchInput') inputSearch: ElementRef;

  @Input() searchLists = [
    {id: 1, text: 'Opción 0'},
    {id: 2, text: 'Opción 1'},
    {id: 3, text: 'Opción 2'},
    {id: 4, text: 'Opción 3'},
    {id: 5, text: 'Opción 4'},
    {id: 6, text: 'Opción 5'},
    {id: 7, text: 'Opción 6'}
  ];

  selectedItems = [

  ];

  filterList = [
    {id: 1, text: 'Opción 0'},
    {id: 2, text: 'Opción 1'},
    {id: 3, text: 'Opción 2'},
    {id: 4, text: 'Opción 3'},
    {id: 5, text: 'Opción 4'},
    {id: 6, text: 'Opción 5'},
    {id: 7, text: 'Opción 6'}
  ];

  showOptionList = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch, faTimes);
  }

  ngOnInit(): void {
  }

  activeSearchInput() {
    this.inputSearch.nativeElement.focus();
    this.enableOptionList();
  }

  deleteSelectedItem(position: number) {
    console.log('position', position);
    this.selectedItems.splice(position, 1);
  }

  enableOptionList() {
    this.showOptionList = true;
  }

  disableOptionList() {
    this.showOptionList = false;
  }

  activeList() {

  }

  getStateShowList() {
    return this.showOptionList ? 'open' : 'close';
  }

  addItem(item) {
    this.inputSearch.nativeElement.focus();
    const exist = this.selectedItems.includes(item);
    if (!exist) { this.selectedItems.push(item); }
  }
}
