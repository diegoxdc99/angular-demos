import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [LinkCardComponent, AccordionComponent],
  imports: [CommonModule, RouterModule],
  exports: [LinkCardComponent, AccordionComponent],
})
export class SharedModule {}
