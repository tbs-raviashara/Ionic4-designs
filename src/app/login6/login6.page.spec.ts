import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login6Page } from './login6.page';

describe('Login6Page', () => {
  let component: Login6Page;
  let fixture: ComponentFixture<Login6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
