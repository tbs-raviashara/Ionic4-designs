import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.page.html',
  styleUrls: ['./demo-modal.page.scss'],
})
export class DemoModalPage {
  public registerData: any = {
    useremail: '',
    userPassword: '',
    userConfirmPassword: ''
  }
  constructor(public moda: ModalController) { }

  closeModal() {
    this.moda.dismiss();
  }

  registerUser() {
    console.log(this.registerData);
  }
}
