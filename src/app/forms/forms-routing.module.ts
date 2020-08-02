import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConditionalFormsComponent } from './components/conditional-forms/conditional-forms.component';
import { CustomSelectionExampleComponent } from './components/custom-selection-example/custom-selection-example.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'conditionalForms',
    component: ConditionalFormsComponent
  },
  {
    path: 'customSelection',
    component: CustomSelectionExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
