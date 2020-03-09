import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
interface Message {
  id: string;
  text: string;
  timeStamp: Date;
  type: string;
}
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.page.html',
  styleUrls: ['./message-list.page.scss'],
})
export class MessageListPage {
  totalDays: any = [];
  currentDate: any;
  messages: any = [{
    id: 1,
    text: 'hello',
    timeStamp: new Date(),
    type: 'incoming',
    img: "../../assets/imgs/1.jpg"
  }, {
    id: 2,
    text: 'hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img: "../../assets/imgs/2.jpg"
  }, {
    id: 3,
    text: 'hello hello hello hello hello hello hello hello hello hello hello hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img: "../../assets/imgs/2.jpg"
  }, {
    id: 4,
    text: 'hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img: "../../assets/imgs/2.jpg"
  }];
  constructor() {
    this.totalDays = this.enumerateDaysBetweenDates(moment().startOf('week'), moment().endOf('week'));
    this.currentDate = moment().format('DD-MMM');
  }

  getClasses(messageType) {
    return {
      incoming: messageType === 'incoming',
      outgoing: messageType === 'outgoing',
    };
  }

  enumerateDaysBetweenDates(startDate: any, endDate: any) {
    let date = []
    while (moment(startDate) <= moment(endDate)) {
      date.push(startDate);
      startDate = moment(startDate).add(1, 'days');
    }
    return date;
  }

  segmentChanged(val: any) {
    console.log(val.detail.value);
  }

}
