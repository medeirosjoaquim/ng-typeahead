import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGroupCardComponent } from './app-group-card/app-group-card.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppConfirmationModalModule } from '../app-confirmation-modal/app-confirmation-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppGroupCardComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatExpansionModule,
    FontAwesomeModule,
    SharedModule,
    AppConfirmationModalModule
  ],
  exports: [
    AppGroupCardComponent
  ]
})
export class AppGroupCardModule { }
