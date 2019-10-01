import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FunctionsState } from '@states';
import { FunctionApp } from '@models';
import { Observable } from 'rxjs';
import { SelectApp } from '@actions';

@Component({
  selector: 'function-apps-list',
  templateUrl: './function-apps-list.component.html',
  styleUrls: ['./function-apps-list.component.scss']
})
export class FunctionAppsListComponent {

  @Select(FunctionsState.availableApps) availableApps$: Observable<FunctionApp[]>;
  @Select(FunctionsState.selectedApp) selectedApp$: Observable<FunctionApp>;

  constructor(private readonly store: Store) { }

  selectApp(id: string) {
    this.store.dispatch(new SelectApp(id));
  }
}