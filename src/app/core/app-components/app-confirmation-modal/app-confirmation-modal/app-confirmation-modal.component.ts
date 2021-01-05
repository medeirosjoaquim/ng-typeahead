import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './app-confirmation-modal.component.html',
  styleUrls: ['./app-confirmation-modal.component.scss']
})
export class AppConfirmationModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AppConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  close() {
    this.dialogRef.close();
  }

}
