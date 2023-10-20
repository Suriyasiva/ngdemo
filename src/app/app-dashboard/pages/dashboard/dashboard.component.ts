import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Route {
  icon: string;
  navItem: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private routes: Router) {}

  isExpanded = true;

  navItems = [
    {
      icon: 'people',
      navItem: 'Users',
      route: '/app/dashboard/miType',
    },
    {
      icon: 'nature_people',
      navItem: 'Profile',
      route: '/app/dashboard/miType/user-profile',
    },
  ];

  handleNavClick(route: Route) {
    this.routes.navigate([route.route]);

    console.log('route :>> ', route);
  }

  toggleDrawer(): void {
    this.isExpanded = !this.isExpanded;
  }
}
