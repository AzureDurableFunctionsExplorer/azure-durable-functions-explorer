export type OrchestratorExecution = {
  orchestrationId: string;
  executionId: string;
  name: string;
  runtimeStatus: string;
  startTimestamp: Date;
}