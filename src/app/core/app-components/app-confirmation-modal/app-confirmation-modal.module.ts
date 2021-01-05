import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfirmationModalComponent } from './app-confirmation-modal/app-confirmation-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AppConfirmationModalComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AppConfirmationModalComponent
  ],
  entryComponents: [
    AppConfirmationModalComponent
  ]
})
export class AppConfirmationModalModule { }
