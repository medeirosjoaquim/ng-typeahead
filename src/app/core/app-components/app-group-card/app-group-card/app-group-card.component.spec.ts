import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGroupCardComponent } from './app-group-card.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

describe('AppGroupCardComponent', () => {
  let component: AppGroupCardComponent;
  let fixture: ComponentFixture<AppGroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatExpansionModule
      ],
      declarations: [ AppGroupCardComponent ],
      providers: [
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
