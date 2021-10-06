import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtButtonComponent } from './pmt-button.component';

describe('PmtButtomsComponent', () => {
  let component: PmtButtonComponent;
  let fixture: ComponentFixture<PmtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
