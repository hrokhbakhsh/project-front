import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingPersonComponent } from './grouping-person.component';

describe('GroupingPersonComponent', () => {
  let component: GroupingPersonComponent;
  let fixture: ComponentFixture<GroupingPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupingPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
