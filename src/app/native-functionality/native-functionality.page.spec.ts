import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeFunctionalityPage } from './native-functionality.page';

describe('NativeFunctionalityPage', () => {
  let component: NativeFunctionalityPage;
  let fixture: ComponentFixture<NativeFunctionalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeFunctionalityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeFunctionalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
