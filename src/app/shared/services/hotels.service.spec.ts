import { TestBed, async } from '@angular/core/testing';

import { HotelsService } from './hotels.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';
import { Hotel } from '../models/hotel';
import { defer } from 'rxjs';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('HotelsService', () => {
  let service: HotelsService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule,
        SharedModule
      ],
      providers: []
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(HotelsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return expected hotel (called once)', async () => {
    const expectedResult = [{
      id: 1,
      name: 'Fusce LLC',
      description: ' nonummy ut,  in, tempus eu, ligula. Aenean',
      email: 'pede.nonummy.ut@infaucibusorci.edu',
      phone: '(084) 7151 7516'
    }];
    service.getHotelsQuery('Fusce LLC')
      .toPromise()
      .then(result => expect(result).toEqual(expectedResult) );
  });
});
