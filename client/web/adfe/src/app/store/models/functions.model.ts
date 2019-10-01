import { FunctionApp } from '@models';

export type FunctionsStateModel = {
  availableApps: FunctionApp[];
  selectedAppId: string;
}