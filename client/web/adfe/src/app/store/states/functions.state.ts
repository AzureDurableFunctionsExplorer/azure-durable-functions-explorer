import { FunctionsStateModel } from '../models';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, SelectApp, SelectExecution } from '@actions';
import { FunctionAppDetailsDto } from '@dtos';
import { TenantService, FunctionsService } from '@services';

@State<FunctionsStateModel>({
  name: "functions",
  defaults: {
    availableApps: [],
    selectedAppId: null,
    appExecutions: [],
    selectedOrchestrationId: null
  }
})
export class FunctionsState {

  constructor(private readonly tenantService: TenantService, private readonly functionsService: FunctionsService) { }

  @Selector()
  static availableApps(state: FunctionsStateModel) {
    return state.availableApps;
  }

  @Selector()
  static selectedApp(state: FunctionsStateModel) {
    return state.availableApps.find(app => app.id === state.selectedAppId);
  }

  @Selector()
  static appExecutions(state: FunctionsStateModel) {
    return state.appExecutions;
  }

  @Selector()
  static selectedExecution(state: FunctionsStateModel) {
    return state.appExecutions.find(execution => execution.orchestrationId === state.selectedOrchestrationId);
  }

  @Action(Login)
  async getAvailableApps(ctx: StateContext<FunctionsStateModel>) {
    const availableApps: FunctionAppDetailsDto[] = await this.tenantService.getAllFunctionApps().toPromise();
    ctx.patchState({
      availableApps,
      selectedAppId: null
    });
  }

  @Action(SelectApp)
  async selectApp(ctx: StateContext<FunctionsStateModel>, selectAppAction: SelectApp) {
    ctx.patchState({ selectedAppId: selectAppAction.functionId });

    const executions = await this.functionsService.getExecutions().toPromise();
    ctx.patchState({
      appExecutions: executions
    })
  }

  @Action(SelectExecution)
  selectExecution(ctx: StateContext<FunctionsStateModel>, selectExecutionAction: SelectExecution) {
    ctx.patchState({ selectedOrchestrationId: selectExecutionAction.orchestrationId });
  }
}