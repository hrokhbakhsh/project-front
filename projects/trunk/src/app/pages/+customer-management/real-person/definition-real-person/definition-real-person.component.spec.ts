import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DefinitionRealPersonComponent} from './definition-real-person.component';

describe('RealPersonComponent', () => {
  let component: DefinitionRealPersonComponent;
  let fixture: ComponentFixture<DefinitionRealPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionRealPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionRealPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
