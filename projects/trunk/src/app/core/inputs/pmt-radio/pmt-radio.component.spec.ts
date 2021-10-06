import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtRadioComponent } from './pmt-radio.component';

describe('PmtRadioComponent', () => {
  let component: PmtRadioComponent;
  let fixture: ComponentFixture<PmtRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
