import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarToggleComponent } from './sidebar-toggle.component';

describe('SidebarCloseComponent', () => {
  let component: SidebarToggleComponent;
  let fixture: ComponentFixture<SidebarToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
