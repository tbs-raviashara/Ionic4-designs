import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SqLiteService } from '../services/sq-lite.service';
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
  constructor(public http: HttpClient, public service: SqLiteService) { }

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

  getwentyRecord() {
    this.service.getRows_customers().then((response: any) => {
      this.accounts = [];
      for (var i = 0; i < 20; i++) {
        this.accounts.push(response.rows.item(i));
      }
    });
  }

  searchResult(val: any) {
    if (val.term === "") {
      this.getwentyRecord();
      return false;
    }
    this.service.getSearchRows_customers(val.term).then((res: any) => {
      this.accounts = [];
      for (var i = 0; i < res.rows.length; i++) {
        this.accounts.push(res.rows.item(i));
      }
    });
  }
}
