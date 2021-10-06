import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenToggleButtonComponent } from './full-screen-toggle-button.component';

describe('FullScreenToggleButtonComponent', () => {
  let component: FullScreenToggleButtonComponent;
  let fixture: ComponentFixture<FullScreenToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
