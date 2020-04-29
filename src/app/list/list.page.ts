import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: any = [];
  public fullResponse: any = [];
  public startLoop: number = 0;
  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe((response: any) => {
      this.fullResponse = response;
      let setLength = response.length >= 10 ? 10 : response.length;
      for (let i = 0; i < setLength; i++) {
        this.items.push(response[i]);
      }
    });
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  getProducts(infiniteScroll: any) {
    this.startLoop += 10;
    let setLength = this.startLoop + 10;
    setTimeout(() => {
      for (let i = this.startLoop; i < setLength; i++) {
        this.items.push(this.fullResponse[i]);
      }
      infiniteScroll.target.complete();
    }, 1000);

    if (this.items.length == this.fullResponse.length) {
      infiniteScroll.target.disabled = true;
    }
  }
}
