import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
