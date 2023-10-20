import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { APP_DASHBOARD } from './routes';
import { UsersComponent } from './pages/users/users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  {
    path: APP_DASHBOARD,
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'create-user',
        component: AddUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDashboardRoutingModule {}
