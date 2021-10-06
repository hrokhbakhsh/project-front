import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtCardComponent } from './pmt-card.component';

describe('PmtCardComponent', () => {
  let component: PmtCardComponent;
  let fixture: ComponentFixture<PmtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
