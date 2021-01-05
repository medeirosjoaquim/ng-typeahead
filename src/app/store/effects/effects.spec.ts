import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { DataEffects } from './effects';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import * as HotelsDataActions from '../actions/hotel.actions';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DataEffects', () => {
    // tslint:disable-next-line: prefer-const
    let actions$: Observable<any>;
    let effects: DataEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule,
                HttpClientModule,
                SharedModule,
            ],
            providers: [
                DataEffects,
                provideMockActions(() => actions$)
            ]
        });
        effects = TestBed.inject<DataEffects>(DataEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
