import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ShowModulesComponent } from './components/show-modules/show-modules.component';
import { PreloadService } from './core/services/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

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
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
        // data: { preload: true}
      },
      {
        path: 'animations',
        loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule),
        // data: { preload: true}
      },
      {
        path: 'reusable',
        loadChildren: () => import('./reusable-components/reusable-components.module').then(m => m.ReusableComponentsModule),
        // data: { preload: true}
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
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules // Use with discretion, not good when you have too many modules
    // preloadingStrategy: PreloadService // own strategy to load only certain modules
    // enableTracing: false,
    preloadingStrategy: QuicklinkStrategy, // Use viewport and routeLink to preload modules
    // paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
