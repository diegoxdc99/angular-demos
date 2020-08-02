import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ConditionalFormsComponent } from './components/conditional-forms/conditional-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectionExampleComponent } from './components/custom-selection-example/custom-selection-example.component';


@NgModule({
  declarations: [HomeComponent, ConditionalFormsComponent, CustomSelectionExampleComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
