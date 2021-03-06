import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CustomSelectionComponent } from './components/custom-selection/custom-selection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginatorDirective } from './components/paginator/paginator.directive';
import { PageComponent } from './components/paginator/page/page.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    LinkCardComponent,
    AccordionComponent,
    CustomSelectionComponent,
    PaginatorDirective,
    PageComponent,
  ],
  imports: [QuicklinkModule, CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    LinkCardComponent,
    AccordionComponent,
    CustomSelectionComponent,
    PaginatorDirective,
    PageComponent
  ],
})
export class SharedModule {}
