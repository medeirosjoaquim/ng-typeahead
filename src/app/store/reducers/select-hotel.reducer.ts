import * as ACTIONS from '../actions/selected-hotel.actions';
import { createReducer, on } from '@ngrx/store';

export const selectedHotelFeatureKey = 'selectedHotel';

export const selectHotelReducer = createReducer(
  {id: 0, name: '', description: '', phone: '', email: ''},
  on(
    ACTIONS.selectHotelsSuccess, (state, { selectedHotel }) => (
      {
        ...state,
        selectedHotel,
      }
    )
  ),
  on(
    ACTIONS.selectHotelError, (state, { error }) => (
      {
        ...state,
        error,
      }
    )
  )
);
