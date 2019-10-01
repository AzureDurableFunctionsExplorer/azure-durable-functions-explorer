import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FunctionsState } from '@states';
import { Observable } from 'rxjs';
import { FunctionApp } from '@models';

@Component({
  selector: 'function-app',
  templateUrl: './function-app.component.html',
  styleUrls: ['./function-app.component.scss']
})
export class FunctionAppComponent {
  @Select(FunctionsState.selectedApp) selectedApp$: Observable<FunctionApp>;
}
