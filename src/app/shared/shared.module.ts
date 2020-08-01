import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LinkCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LinkCardComponent]
})
export class SharedModule { }
