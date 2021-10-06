import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSidebarHeaderComponent } from './default-sidebar-header.component';

describe('SidebarHeaderComponent', () => {
  let component: DefaultSidebarHeaderComponent;
  let fixture: ComponentFixture<DefaultSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultSidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
