import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDesign1Page } from './chat-design1.page';

describe('ChatDesign1Page', () => {
  let component: ChatDesign1Page;
  let fixture: ComponentFixture<ChatDesign1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDesign1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDesign1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
