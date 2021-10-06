import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtListComponent } from './pmt-list.component';

describe('PmtListComponent', () => {
  let component: PmtListComponent;
  let fixture: ComponentFixture<PmtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
