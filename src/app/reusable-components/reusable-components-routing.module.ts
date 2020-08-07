import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginatorExampleComponent } from './components/paginator-example/paginator-example.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'paginator',
    component: PaginatorExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableComponentsRoutingModule { }
