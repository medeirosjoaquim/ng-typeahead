import { ActionReducerMap } from '@ngrx/store';
import { State } from '../state/state';
import * as fromHotels from './hotels.reducer';
import * as fromSelectHotel from './select-hotel.reducer';
export const reducers: ActionReducerMap<State> = {
  hotels: fromHotels.hotelsReducer,
  selectedHotel: fromSelectHotel.selectHotelReducer
};