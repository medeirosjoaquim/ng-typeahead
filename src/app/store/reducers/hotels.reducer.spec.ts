import { hotelsReducer  } from './hotels.reducer';
import { Hotel } from 'src/app/shared/models/hotel';
const initialState: Hotel[] =
  [{id: 0, description: '', name: '', email: '', phone: '' } ];
describe('detailsReducer', () => {
  describe('Default behaviour', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result =  hotelsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('Default behaviour', () => {
    it('should return a new state with hotels', () => {
      const action = { type: '[API] Get hotels' } ;
      const result =  hotelsReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
