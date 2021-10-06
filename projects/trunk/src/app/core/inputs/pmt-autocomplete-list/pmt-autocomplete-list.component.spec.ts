import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtAutocompleteListComponent } from './pmt-autocomplete-list.component';

describe('PmtAutocompleteListComponent', () => {
  let component: PmtAutocompleteListComponent;
  let fixture: ComponentFixture<PmtAutocompleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtAutocompleteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtAutocompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
