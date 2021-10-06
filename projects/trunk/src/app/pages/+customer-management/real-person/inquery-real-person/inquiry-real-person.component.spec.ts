import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryRealPersonComponent } from './inquiry-real-person.component';

describe('InqueryRealPersonComponent', () => {
  let component: InquiryRealPersonComponent;
  let fixture: ComponentFixture<InquiryRealPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryRealPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryRealPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
