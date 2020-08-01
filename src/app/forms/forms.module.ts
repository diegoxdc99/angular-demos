import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ConditionalFormsComponent } from './components/conditional-forms/conditional-forms.component';


@NgModule({
  declarations: [HomeComponent, ConditionalFormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
