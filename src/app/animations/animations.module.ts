import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionExampleComponent } from './components/accordion-example/accordion-example.component';


@NgModule({
  declarations: [HomeComponent, AccordionExampleComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    SharedModule
  ]
})
export class AnimationsModule { }
