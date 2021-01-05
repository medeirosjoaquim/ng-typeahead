import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchInputComponent } from './app-search-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { State } from 'src/app/store/state/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from 'src/app/store/reducers/reducers';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
describe('AppSearchInputComponent', () => {
  let component: AppSearchInputComponent;
  let fixture: ComponentFixture<AppSearchInputComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchInputComponent ],
      imports: [
        MatAutocompleteModule,
        MatOptionModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({}),
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forChild()
      ],
      providers: [ TranslateStore],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject<Store<State>>(Store);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
