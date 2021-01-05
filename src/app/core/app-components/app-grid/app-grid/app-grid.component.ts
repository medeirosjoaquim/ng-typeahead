import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Hotel } from 'src/app/shared/models/hotel';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../store/state/state';
import { selectHotel } from 'src/app/store/selectors.ts/selectors';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent implements OnInit {
  hotelsList$ = this.store.pipe(select(selectHotel));
  constructor(private store: Store<State>) {
  }

  ngOnInit(): void { }


}
