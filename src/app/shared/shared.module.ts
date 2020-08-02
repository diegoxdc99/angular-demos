import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CustomSelectionComponent } from './components/custom-selection/custom-selection.component';

@NgModule({
  declarations: [LinkCardComponent, AccordionComponent, CustomSelectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkCardComponent, AccordionComponent, CustomSelectionComponent],
})
export class SharedModule {}
