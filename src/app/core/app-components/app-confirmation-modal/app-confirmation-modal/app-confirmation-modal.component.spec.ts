import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfirmationModalComponent } from './app-confirmation-modal.component';

describe('AppConfirmationModalComponent', () => {
  let component: AppConfirmationModalComponent;
  // tslint:disable-next-line: prefer-const
  let dialogRef: MatDialogRef<AppConfirmationModalComponent>;
  // tslint:disable-next-line: prefer-const
  let data: any;
  // let fixture: ComponentFixture<AppConfirmationModalComponent>;
  it('should create', () => {
    component =
      new  AppConfirmationModalComponent( dialogRef, data);
    expect(component).toBeTruthy();
  });
});
