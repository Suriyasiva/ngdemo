import { Component } from '@angular/core';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-di-type',
  templateUrl: './di-type.component.html',
  styleUrls: ['./di-type.component.css'],
})
export class DiTypeComponent {
  constructor(private router: Router, private matDialog: MatDialog) {}

  onSetupClick(selectedType: string) {
    this.matDialog.closeAll();
    this.router.navigate(['app/dashboard/' + selectedType]);
  }
}
