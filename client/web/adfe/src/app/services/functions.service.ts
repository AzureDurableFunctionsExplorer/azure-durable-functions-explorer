import { Injectable } from '@angular/core';
import { ExecutionDto } from '../dtos/execution.dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private readonly executions: ExecutionDto[] = [
    { orchestrationId: "1", executionId: "1", name: "Register User", runtimeStatus: "Running", startTimestamp: new Date(new Date().getTime() - (1000 * 60)) },
    { orchestrationId: "2", executionId: "1", name: "Register User", runtimeStatus: "Running", startTimestamp: new Date(new Date().getTime() - (1000 * 60 * 4)) },
    { orchestrationId: "3", executionId: "1", name: "Enable 2FA", runtimeStatus: "Completed", startTimestamp: new Date(new Date().getTime() - (1000 * 60 * 7)) },
  ]

  getExecutions(): Observable<ExecutionDto[]> {
    return of(this.executions);
  }
}
