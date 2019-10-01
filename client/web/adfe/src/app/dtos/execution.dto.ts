export interface ExecutionDto {
  orchestrationId: string;
  executionId: string;
  name: string;
  startTimestamp: Date;
  runtimeStatus: string;
}