import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConditionalFormsComponent } from './components/conditional-forms/conditional-forms.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'conditionalForms',
    component: ConditionalFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
