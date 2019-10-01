import { FunctionApp, OrchestratorExecution } from '@models';

export type FunctionsStateModel = {
  availableApps: FunctionApp[];
  selectedAppId: string;
  appExecutions: OrchestratorExecution[];
  selectedOrchestrationId: string;
}