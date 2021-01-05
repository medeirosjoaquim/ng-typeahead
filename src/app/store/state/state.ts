import { Hotel } from 'src/app/shared/models/hotel';

export interface State {
    hotels: Hotel[];
    selectedHotel: Hotel;
}
