export class SelectApp {
  static readonly type = "[Functions] Select App";
  constructor(public functionId: string) { }
}

export class SelectExecution {
  static readonly type = "[Functions] Select Execution";
  constructor(public orchestrationId: string) { }
}