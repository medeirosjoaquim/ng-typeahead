import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as HotelsDataActions from '../actions/hotel.actions';
import * as SelectedHotelDataActions from '../actions/selected-hotel.actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HotelsService } from 'src/app/shared/services/hotels.service';

@Injectable()
export class DataEffects {
  constructor(private actions: Actions,
              private dataService: HotelsService) { }
  @Effect()
  getHotelsList = this.actions.pipe(
    ofType(HotelsDataActions.getHotels),
    switchMap(() => {
      return this.dataService.getHotels().pipe(
        map(data => HotelsDataActions.getHotelsSuccess({ hotels: data })),
        catchError(error =>
          of(HotelsDataActions.getHotelsError({ error }))
        )
      );
    })
  );
  @Effect()
  getHotelByQuery = this.actions.pipe(
    ofType(HotelsDataActions.getHotelsQuery),
    switchMap(query => {
      return this.dataService.getHotelsQuery(query.search).pipe(
        map(data => HotelsDataActions.getHotelsSuccessQuery({ hotels: data })),
        catchError(error =>
          of(HotelsDataActions.getHotelsError({ error }))
        )
      );
    })
  );
  @Effect()
  selectHotel = this.actions.pipe(
    ofType(SelectedHotelDataActions.selectHotel),
    map(selection => SelectedHotelDataActions
      .selectHotelsSuccess({ selectedHotel: selection.selectedHotel }))
  )
}