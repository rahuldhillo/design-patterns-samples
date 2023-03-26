import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { Factory } from '../../factory/factory';

@Component({
  selector: 'app-demo2',
  template: ` <button (click)="print()">User</button> `,
})
export class Demo2Component {
  constructor() {}

  ngOinit() {
    print();
  }

  print() {
    console.log(Factory.createUser('user').displayMessage());
  }
}
