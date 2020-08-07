import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableComponentsRoutingModule } from './reusable-components-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PaginatorExampleComponent } from './components/paginator-example/paginator-example.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, PaginatorExampleComponent],
  imports: [
    CommonModule,
    ReusableComponentsRoutingModule,
    SharedModule
  ]
})
export class ReusableComponentsModule { }
