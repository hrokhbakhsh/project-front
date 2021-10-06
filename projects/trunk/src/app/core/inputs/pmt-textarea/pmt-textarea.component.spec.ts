import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtTextareaComponent } from './pmt-textarea.component';

describe('PmtTextareaComponent', () => {
  let component: PmtTextareaComponent;
  let fixture: ComponentFixture<PmtTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
