import { createAction, props } from '@ngrx/store';
import { Hotel } from 'src/app/shared/models/hotel';

export const getHotels = createAction('[API] Get hotels');
export const getHotelsSuccess =
  createAction('[API] Receive hotels',
    props<{ hotels: Hotel[] }>()
  );
export const getHotelsQuery =
  createAction('[API] Get hotels with query', props<{search: string}>());
export const getHotelsSuccessQuery =
  createAction('[API] Receive hotels with query results',
    props<{ hotels: Hotel[] }>()
  );

export const getHotelsError =
  createAction('[API] Get hotels error',
    props<{ error: any }>()
  );
