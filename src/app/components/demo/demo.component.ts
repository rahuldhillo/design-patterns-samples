import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { Factory } from '../../factory/factory';

@Component({
  selector: 'app-demo',
  template: ` <button (click)="print()">Admin</button> `,
})
export class DemoComponent {
  ngOinit() {
    print();
  }

  print() {
    console.log(Factory.createUser('admin').displayMessage());
  }
}
