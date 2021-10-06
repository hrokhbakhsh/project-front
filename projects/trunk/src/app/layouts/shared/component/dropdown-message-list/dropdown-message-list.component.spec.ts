import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMessageListComponent } from './dropdown-message-list.component';

describe('DropdownMessageListComponent', () => {
  let component: DropdownMessageListComponent;
  let fixture: ComponentFixture<DropdownMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMessageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
