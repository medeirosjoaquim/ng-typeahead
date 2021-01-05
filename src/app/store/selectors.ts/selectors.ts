import * as fromHotelsReducer from '../reducers/reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../state/state';
import { hotelsFeatureKey } from '../reducers/hotels.reducer';
import { selectedHotelFeatureKey } from '../reducers/select-hotel.reducer';

// const getHotelsState = createFeatureSelector<State>(fromHotelsReducer.hotelsFeatureKey);
const getHotelsState = createFeatureSelector<State>(hotelsFeatureKey);
const getSelectedHotel = createFeatureSelector<State>(selectedHotelFeatureKey);
  
export const selectHotelsList = createSelector(
    getHotelsState,
    state => state.hotels
);
export const selectHotel = createSelector(
    getSelectedHotel,
    state => state.selectedHotel
);

