import { Component, OnInit, HostBinding, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { accordionAnimations } from './accordion-animations';
import { UniqueSelectionDispatcherService } from 'src/app/core/services/unique-selection-dispatcher.service';
let counter = 0;
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [accordionAnimations.bodyExpansion]
})
export class AccordionComponent implements OnInit, OnDestroy {
  @HostBinding('class.expanded')
  private _isExpanded = false;

  get isExpanded() { return this._isExpanded; }
  set isExpanded(expanded: boolean) {
    this._isExpanded = expanded;
    if (expanded) {
      this.uniqueSelectionDispatcherService.notify(this.id);
    }
  }
  id = counter++;

  private _removeUniqueSelectionListener: () => void = () => {};
  constructor(protected uniqueSelectionDispatcherService: UniqueSelectionDispatcherService) {
    this._removeUniqueSelectionListener = uniqueSelectionDispatcherService.listen((id: number) => {
        if (this.id !== id) {
          this.isExpanded = false;
        }
      });
  }
  ngOnDestroy(): void {
    this._removeUniqueSelectionListener();
  }

  ngOnInit(): void {

  }

  getState() {
    return this.isExpanded ? 'expanded' : 'collapsed';
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
