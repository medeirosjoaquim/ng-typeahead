import { Component, OnInit, Output, Input, HostListener } from '@angular/core';
import { Hotel } from 'src/app/shared/models/hotel';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AppConfirmationModalComponent } from '../../app-confirmation-modal/app-confirmation-modal/app-confirmation-modal.component';

@Component({
  selector: 'app-group-card',
  templateUrl: './app-group-card.component.html',
  styleUrls: ['./app-group-card.component.scss']
})
export class AppGroupCardComponent implements OnInit {
public screenWidth: number;
@Input() hotels: Hotel[];

  panelOpenState = false;
  faHotel = faHotel;
  constructor(public dialog: MatDialog) { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AppConfirmationModalComponent, {
      width: '450px',
      height: '200px',
      panelClass: 'confirmation-modal'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
