import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDashboardRoutingModule } from './app-dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './pages/users/users.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAppInputComponent } from '../components/mat-app-input/mat-app-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';

// apex chart
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    // components
    DashboardComponent,
    UsersComponent,
    UserProfileComponent,
    AddUserComponent,

    MatAppInputComponent,
  ],
  imports: [
    CommonModule,
    AppDashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,

    // form module
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,

    // radio module
    MatRadioModule,

    // select box
    MatSelectModule,

    // datepicker module
    MatDatepickerModule,
    MatNativeDateModule,

    // form-stepper
    MatStepperModule,

    // grid
    MatGridListModule,
    // apex chart
    NgApexchartsModule

  ],
})
export class AppDashboardModule {}
