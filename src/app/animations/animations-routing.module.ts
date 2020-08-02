import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccordionExampleComponent } from './components/accordion-example/accordion-example.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accordion',
    component: AccordionExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
