import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.page.html',
  styleUrls: ['./form-wizard.page.scss'],
})
export class FormWizardPage {
  public pageName: string = "step1";
  public buttonName: string = '';
  constructor() { }

  changePage(val: any, val1: any) {
    this.pageName = val;
    this.buttonName = val1;
  }

}
