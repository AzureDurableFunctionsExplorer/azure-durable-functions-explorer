import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FunctionsState } from '@states';
import { FunctionApp, OrchestratorExecution } from '@models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
  @Select(FunctionsState.selectedApp) selectedApp$: Observable<FunctionApp>;
  @Select(FunctionsState.selectedExecution) selectedExecution$: Observable<OrchestratorExecution>;
}
