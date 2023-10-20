import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mi-type',
  templateUrl: './mi-type.component.html',
  styleUrls: ['./mi-type.component.css']
})
export class MiTypeComponent {

  constructor(private router:Router,private matDialog:MatDialog){

  }

  onSetupClick(selectedType: string) {
    this.matDialog.closeAll()
    this.router.navigate(['app/dashboard/'+selectedType]);
  }

}
