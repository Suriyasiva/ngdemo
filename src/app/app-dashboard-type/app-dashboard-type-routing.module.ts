import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_TYPE} from './routes';
import { AppTypeDashboardComponent } from './pages/app-type-dashboard/app-type-dashboard.component';

const routes: Routes = [
  {
    path: APP_TYPE,
    component: AppTypeDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AppDashboardTypeRoutingModule {}
