import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitTeammateComponent } from './add-unit-teammate.component';

describe('AddUnitTeammateComponent', () => {
  let component: AddUnitTeammateComponent;
  let fixture: ComponentFixture<AddUnitTeammateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnitTeammateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnitTeammateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
