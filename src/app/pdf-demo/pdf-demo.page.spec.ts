import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDEmoPage } from './pdf-demo.page';

describe('PdfDEmoPage', () => {
  let component: PdfDEmoPage;
  let fixture: ComponentFixture<PdfDEmoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDEmoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDEmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
