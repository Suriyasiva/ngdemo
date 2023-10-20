import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-dashboard-type/app-dashboard-type.module').then(
        (m) => m.AppDashboardTypeModule
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./app-dashboard/app-dashboard.module').then(
        (m) => m.AppDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
