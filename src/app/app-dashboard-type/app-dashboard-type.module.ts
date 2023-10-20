import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDashboardTypeRoutingModule } from './app-dashboard-type-routing.module';
import { AppTypeDashboardComponent } from './pages/app-type-dashboard/app-type-dashboard.component';
import { MiTypeComponent } from './components/mi-type/mi-type.component';
import { DiTypeComponent } from './components/di-type/di-type.component';
import { MiDiTypeComponent } from './components/mi-di-type/mi-di-type.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { AppTypeCardComponent } from './components/app-type-card/app-type-card.component';



@NgModule({
  declarations: [
    AppTypeDashboardComponent,
    MiTypeComponent,
    DiTypeComponent,
    MiDiTypeComponent,
    AppTypeCardComponent,
  ],
  imports: [
    CommonModule,
    AppDashboardTypeRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AppDashboardTypeModule { }
