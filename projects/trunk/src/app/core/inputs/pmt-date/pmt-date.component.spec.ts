import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtDateComponent } from './pmt-date.component';

describe('PmtDateComponent', () => {
  let component: PmtDateComponent;
  let fixture: ComponentFixture<PmtDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
