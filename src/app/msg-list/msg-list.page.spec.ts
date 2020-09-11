import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgListPage } from './msg-list.page';

describe('MsgListPage', () => {
  let component: MsgListPage;
  let fixture: ComponentFixture<MsgListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
