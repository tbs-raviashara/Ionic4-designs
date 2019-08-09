import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login3Page } from './login3.page';

describe('Login3Page', () => {
  let component: Login3Page;
  let fixture: ComponentFixture<Login3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
