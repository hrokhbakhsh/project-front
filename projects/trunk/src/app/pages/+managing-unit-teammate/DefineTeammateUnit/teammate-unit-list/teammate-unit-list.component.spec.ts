import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammateUnitListComponent } from './teammate-unit-list.component';

describe('TeammateUnitListComponent', () => {
  let component: TeammateUnitListComponent;
  let fixture: ComponentFixture<TeammateUnitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammateUnitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
