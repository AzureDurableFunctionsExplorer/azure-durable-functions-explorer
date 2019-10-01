import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FunctionsState } from '@states';
import { Observable } from 'rxjs';
import { FunctionApp, OrchestratorExecution } from '@models';
import { SelectExecution } from '@actions';

@Component({
  selector: 'function-app',
  templateUrl: './function-app.component.html',
  styleUrls: ['./function-app.component.scss']
})
export class FunctionAppComponent {
  @Select(FunctionsState.selectedApp) selectedApp$: Observable<FunctionApp>;
  @Select(FunctionsState.appExecutions) appExecutions$: Observable<OrchestratorExecution[]>;
  @Select(FunctionsState.selectedExecution) selectedExecution$: Observable<OrchestratorExecution>;

  constructor(private readonly store: Store) { }

  selectExecution(orchestrationId: string) {
    this.store.dispatch(new SelectExecution(orchestrationId));
  }
}
