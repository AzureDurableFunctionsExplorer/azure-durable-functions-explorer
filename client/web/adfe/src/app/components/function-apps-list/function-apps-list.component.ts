import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'function-apps-list',
  templateUrl: './function-apps-list.component.html',
  styleUrls: ['./function-apps-list.component.scss']
})
export class FunctionAppsListComponent {

  items: string[] = [];

  constructor() {
    for (let index = 0; index < 100; index++) {
      this.items.push("Item number " + index);
    }
  }

}