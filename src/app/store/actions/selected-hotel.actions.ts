import { createAction, props } from '@ngrx/store';
import { Hotel } from 'src/app/shared/models/hotel';

export const selectHotel = createAction('[API] Select hotels', props<{ selectedHotel: Hotel }>());
export const selectHotelsSuccess =
  createAction('[API] Receive selected hotels',
    props<{ selectedHotel: Hotel }>()
  );
export const selectHotelError = 
  createAction('[API] Get hotels error',
    props<{ error: any }>()
  );