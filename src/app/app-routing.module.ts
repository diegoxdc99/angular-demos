import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ShowModulesComponent } from './components/show-modules/show-modules.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ShowModulesComponent
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'animations',
        loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule)
      },
      {
        path: 'reusable',
        loadChildren: () => import('./reusable-components/reusable-components.module').then(m => m.ReusableComponentsModule)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
