import * as ACTIONS from '../actions/hotel.actions';
import { createReducer, on } from '@ngrx/store';

export const hotelsFeatureKey = 'hotels';

export const hotelsReducer = createReducer(
  [],
  on(
    ACTIONS.getHotelsSuccess, (state, { hotels }) => (
      {
        ...state,
        hotels,
      }
    )
  ),
  on(
    ACTIONS.getHotelsSuccessQuery, (state, { hotels }) => (
      {
        ...state,
        hotels,
      }
    )
  ),
  on(
    ACTIONS.getHotelsError, (state, { error }) => (
      {
        ...state,
        error,
      }
    )
  )
);
