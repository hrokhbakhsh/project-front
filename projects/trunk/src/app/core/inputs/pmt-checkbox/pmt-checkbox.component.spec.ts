import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtCheckboxComponent } from './pmt-checkbox.component';

describe('PmtCheckboxComponent', () => {
  let component: PmtCheckboxComponent;
  let fixture: ComponentFixture<PmtCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
