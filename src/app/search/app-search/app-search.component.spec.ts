import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchComponent } from './app-search.component';
import { AppHeaderModule } from 'src/app/core/app-components/app-header/app-header.module';
import { AppGridModule } from 'src/app/core/app-components/app-grid/app-grid.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers/reducers';

describe('AppSearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppHeaderModule,
        AppGridModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        TranslateModule.forChild()
      ],
      declarations: [ AppSearchComponent ],
      providers: [ TranslateStore, Store ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
