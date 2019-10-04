import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login4Page } from './login4.page';

describe('Login4Page', () => {
  let component: Login4Page;
  let fixture: ComponentFixture<Login4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
