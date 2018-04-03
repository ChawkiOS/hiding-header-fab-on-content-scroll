import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: string[] = [];

  constructor(public navCtrl: NavController) {
    for (let i = 1; i < 50; i++) {
      this.items.push('Item n°' + i);
    }
  }

}
