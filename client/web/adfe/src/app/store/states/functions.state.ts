import { FunctionsStateModel } from '../models';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, SelectApp } from '@actions';
import { TenantService } from 'src/app/services/tenant.service';
import { FunctionAppDetailsDto } from '@dtos';

@State<FunctionsStateModel>({
  name: "functions",
  defaults: {
    availableApps: [],
    selectedAppId: null
  }
})
export class FunctionsState {

  constructor(private readonly tenantService: TenantService) { }

  @Selector()
  static availableApps(state: FunctionsStateModel) {
    return state.availableApps;
  }

  @Selector()
  static selectedApp(state: FunctionsStateModel) {
    return state.availableApps.find(app => app.id === state.selectedAppId);
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
  selectApp(ctx: StateContext<FunctionsStateModel>, selectAppAction: SelectApp) {
    ctx.patchState({ selectedAppId: selectAppAction.functionId });
  }
}