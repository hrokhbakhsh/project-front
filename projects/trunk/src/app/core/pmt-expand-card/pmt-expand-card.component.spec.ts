import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtExpandCardComponent } from './pmt-expand-card.component';

describe('PmtExpandCardComponent', () => {
  let component: PmtExpandCardComponent;
  let fixture: ComponentFixture<PmtExpandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtExpandCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtExpandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
