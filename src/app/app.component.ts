import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
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
    }, {
      title: 'Login 5',
      url: '/login-5',
      icon: 'list'
    },
    {
      title: 'Login 6',
      url: '/login-6',
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
    },
    {
      title: 'PDF Demo',
      url: '/pdf-demo',
      icon: 'list'
    },
    {
      title: 'Native Functionality',
      url: '/native-functionality',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public push: Push
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 5000);
      this.pushNotifictions();
    });
  }

  pushNotifictions() {
    const options: PushOptions = {
      android: {
        senderID: '65950833915'
      },
      browser: {},
      ios: {
        alert: true,
        badge: true,
        sound: true,
        clearBadge: true
      },
      windows: {},

    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {

      console.log('Device registered', data);
      console.log('Device registrationId ', data.registrationId);
      localStorage.push_deviceToken = data.registrationId;
    });

    pushObject.on('notification').subscribe((data: any) => {
      if (data.additionalData.foreground) {
        console.log('Received a notification foreground ', data);
        // if application open
      } else {
        console.log('Received a notification background ', data);
      }
    });

    pushObject.on('error').subscribe(error => {
      console.error('Error with Push plugin' + JSON.stringify(error));
    });

  }
}
