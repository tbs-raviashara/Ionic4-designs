import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWizardPage } from './form-wizard.page';

describe('FormWizardPage', () => {
  let component: FormWizardPage;
  let fixture: ComponentFixture<FormWizardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWizardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWizardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
