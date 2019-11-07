import { Component, OnInit } from '@angular/core';
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
export class MessageListPage implements OnInit {

  messages: any = [{
    id: 1,
    text: 'hello',
    timeStamp: new Date(),
    type: 'incoming',
    img:"../../assets/imgs/1.jpg"
  },{
    id: 2,
    text: 'hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img:"../../assets/imgs/2.jpg"
  },{
    id: 3,
    text: 'hello hello hello hello hello hello hello hello hello hello hello hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img:"../../assets/imgs/2.jpg"
  },{
    id: 4,
    text: 'hello',
    timeStamp: new Date(),
    type: 'outgoing',
    img:"../../assets/imgs/2.jpg"
  }];
  constructor() { }

  ngOnInit() {
  }

  getClasses(messageType) {
    return {
      incoming: messageType === 'incoming',
      outgoing: messageType === 'outgoing',
    };
  }

}
