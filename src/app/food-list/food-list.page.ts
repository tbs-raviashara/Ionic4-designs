import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public accounts: any = [];
  public selectedAccount: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    // if (localStorage.isStorage !== "true") {
    //   this.service.createDB();
    //   this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe((response: any) => {
    //     for (let item of response) {
    //       this.service.insert_customers_Row(item.id, item.name);
    //     }
    //     this.getwentyRecord();
    //     localStorage.isStorage = true;
    //   });
    // } else {
    //   this.service.openDB().then((response: any) => {
    //     if (response === "success") {
    //       this.getwentyRecord();
    //     }
    //   });
    // }
  }
}
