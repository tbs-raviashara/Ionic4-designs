import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login5Page } from './login5.page';

describe('Login5Page', () => {
  let component: Login5Page;
  let fixture: ComponentFixture<Login5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
