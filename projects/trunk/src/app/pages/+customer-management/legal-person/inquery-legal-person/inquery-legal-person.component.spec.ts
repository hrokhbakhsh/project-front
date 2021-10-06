import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqueryLegalPersonComponent } from './inquery-legal-person.component';

describe('InqueryLegalPersonComponent', () => {
  let component: InqueryLegalPersonComponent;
  let fixture: ComponentFixture<InqueryLegalPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqueryLegalPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqueryLegalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
