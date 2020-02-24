import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDesign2Page } from './chat-design2.page';

describe('ChatDesign2Page', () => {
  let component: ChatDesign2Page;
  let fixture: ComponentFixture<ChatDesign2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDesign2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDesign2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
