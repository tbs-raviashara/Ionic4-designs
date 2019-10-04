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
    for (let i = 0; i < 1000; i++) {
      this.accounts.push({ id: i }, { name: ' name_' + i });
    }
  }
}
