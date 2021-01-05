import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HotelsService } from '../../../../shared/services/hotels.service';
import { Subject, Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, take, switchMap, startWith, catchError } from 'rxjs/operators';
import { Hotel } from 'src/app/shared/models/hotel';
import { State } from '../../../../store/state/state';
import { Store, select } from '@ngrx/store';
import * as HotelsDataActions from '../../../../store/actions/hotel.actions';
import * as SelectedHotelDataActions from '../../../../store/actions/selected-hotel.actions';
import { selectHotelsList } from 'src/app/store/selectors.ts/selectors';

@Component({
  selector: 'app-search-input',
  templateUrl: './app-search-input.component.html',
  styleUrls: ['./app-search-input.component.scss']
})
export class AppSearchInputComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  public search: Hotel;
  searchUpdate = new Subject<string>();
  prefetchResults$: Observable<Hotel[]>;
  private subscription: Subscription;

  constructor(private store: Store<State>) { }
  ngOnInit(): void {
    this.subscription = this.searchUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .pipe(startWith('')).subscribe(
        value =>
          this.store
            .dispatch(HotelsDataActions.getHotelsQuery({ search: value }))
      );
    this.prefetchResults$ = this.store.pipe(select(selectHotelsList))
  }
  selectHotel(hotel: Hotel) {
    this.store
      .dispatch(SelectedHotelDataActions
        .selectHotel({ selectedHotel: hotel }))
    this.search = hotel;
  }
  displayFn(option): string {
    if (option) {
      return option.name;
    } else {
      return '';
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
