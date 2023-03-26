import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demo',
  template: `
    <button (click)="setDataInService()">Set Data</button>
    <button (click)="getDataFromService()">Get Data</button>
  `,
})
export class DemoComponent {
  constructor(private demoService: DemoService) {}

  setDataInService(): void {
    this.demoService.setData({ message: 'Hello World!' });
  }

  getDataFromService(): void {
    console.log(this.demoService.getData());
  }
}
