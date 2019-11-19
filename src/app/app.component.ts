import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login 1',
      url: '/login-1',
      icon: 'home'
    },
    {
      title: 'Login 2',
      url: '/login-2',
      icon: 'list'
    },
    {
      title: 'Login 3',
      url: '/login-3',
      icon: 'list'
    },{
      title: 'Login 5',
      url: '/login-5',
      icon: 'list'
    },
    {
      title: 'Food List',
      url: '/food-list',
      icon: 'list'
    },
    {
      title: 'Peoject List',
      url: '/project-list',
      icon: 'list'
    },
    {
      title: 'Task List',
      url: '/tasklist',
      icon: 'list'
    },
    {
      title: 'Task Details',
      url: '/task-details',
      icon: 'list'
    },
    {
      title: 'Message List',
      url: '/message-list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
