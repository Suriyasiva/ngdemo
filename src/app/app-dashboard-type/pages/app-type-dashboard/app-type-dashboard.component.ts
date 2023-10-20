import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DiTypeComponent } from '../../components/di-type/di-type.component';
import { MiTypeComponent } from '../../components/mi-type/mi-type.component';
import { MiDiTypeComponent } from '../../components/mi-di-type/mi-di-type.component';

const DI_TYPE = 'DI-TYPE';
const MI_TYPE = 'MI-TYPE';
const MI_DI_TYPE = 'DI-MI-TYPE';

@Component({
  selector: 'app-app-type-dashboard',
  templateUrl: './app-type-dashboard.component.html',
  styleUrls: ['./app-type-dashboard.component.css'],
})
export class AppTypeDashboardComponent {
  constructor(public dialog: MatDialog) {
    /**
     *
     * @import MatDialog from angular material service
     *
     */
  }

  // 'DI-MI-TYPE'
  appTypes = ['MI-TYPE', 'DI-TYPE'];

  openDialog(selectedType: string) {
    const di = DiTypeComponent;
    const mi = MiTypeComponent;
    const mi_di = MiDiTypeComponent;

    let _selectedType;

    switch (selectedType) {
      case DI_TYPE:
        _selectedType = di;
        break;
      case MI_TYPE:
        _selectedType = mi;
        break;
      case MI_DI_TYPE:
        _selectedType = mi_di;
        break;

      default:
        _selectedType = mi_di;
        break;
    }

    this.dialog.open(_selectedType);
  }
}
