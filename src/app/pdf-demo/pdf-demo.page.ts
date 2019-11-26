import { Component } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-pdf-demo',
  templateUrl: './pdf-demo.page.html',
  styleUrls: ['./pdf-demo.page.scss'],
})
export class PdfDEmoPage {
  constructor(public printer: Printer) { }

  captureScreen() {
    let options: PrintOptions = {
      name: 'MyDocument',
      duplex: true,
    }

    this.printer.print(document.getElementById('contentToConvert'), options).then((success: any) => {
      console.log(success);
    });
  }
}
