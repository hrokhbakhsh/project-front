import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionLegalPersonComponent } from './definition-legal-person.component';

describe('DefinitionLegalPersonComponent', () => {
  let component: DefinitionLegalPersonComponent;
  let fixture: ComponentFixture<DefinitionLegalPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionLegalPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionLegalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
